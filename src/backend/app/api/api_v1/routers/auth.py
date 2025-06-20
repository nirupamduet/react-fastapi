from datetime import timedelta
from urllib import response
from fastapi import APIRouter, Depends, HTTPException, Request, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from jose import JWTError
from pydantic import BaseModel
from sqlalchemy.orm import Session
from jose import JWTError, jwt

from app.core.config import settings
from app.schemas.auth.token import Token
from app.db.database import get_db
from app.services.auth.auth_service import create_refresh_token, verify_password, create_access_token
from app.services.customers.customer_service import get_customer_by_email, get_customer_by_sap_id_or_domain_id

auth_router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str
    
@auth_router.post("/auth/json-login", response_model=Token)
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    customer = get_customer_by_sap_id_or_domain_id(db, login_data.username)
    latest_password = (customer.passwords[-1].password if customer and customer.passwords else None)

    if not customer or not verify_password(login_data.password, latest_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    access_token = create_access_token(data={"sub": customer.email})
    refresh_token = create_refresh_token(data={"sub": customer.email})

    response = JSONResponse(content={
        "access_token": access_token,
        "token_type": "bearer"
    })

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=60 * 60 * 24 * settings.REFRESH_TOKEN_EXPIRE_DAYS
    )
    return response


@auth_router.post("/auth/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    customer = get_customer_by_sap_id_or_domain_id(db, form_data.username)
    latest_password = (customer.passwords[-1].password if customer and customer.passwords else None)

    if not customer or not verify_password(form_data.password, latest_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    

    access_token = create_access_token(data={"sub": customer.email})
    refresh_token = create_refresh_token(data={"sub": customer.email})

    response = JSONResponse(content={
        "access_token": access_token,
        "token_type": "bearer"
    })
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=60 * 60 * 24 * settings.REFRESH_TOKEN_EXPIRE_DAYS
    )

    return response

# Refresh Access Token Using Refresh Token in Cookie
@auth_router.post("/auth/refresh", response_model=Token)
def refresh_token(request: Request):
    token = request.cookies.get("refresh_token")
    if not token:
        raise HTTPException(status_code=401, detail="Refresh token missing")

    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid token payload")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    access_token = create_access_token(
        data={"sub": email},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    return {"access_token": access_token, "token_type": "bearer"}

#  Logout Endpoint: Clear Cookie
@auth_router.post("/auth/logout")
def logout():
    response = JSONResponse(content={"detail": "Logged out"})
    response.delete_cookie("refresh_token")
    return response
