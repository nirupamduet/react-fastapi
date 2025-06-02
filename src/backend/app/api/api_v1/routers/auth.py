from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.schemas.auth.token import Token
from app.db.database import get_db
from app.services.auth.auth_service import verify_password, create_access_token
from app.services.customers.customer_service import get_customer_by_email

auth_router = APIRouter()

@auth_router.post("/auth/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    customer = get_customer_by_email(db, form_data.username)
    if not customer or not verify_password(form_data.password, customer.password.password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    access_token = create_access_token(data={"sub": customer.email})
    return {"access_token": access_token, "token_type": "bearer"}
