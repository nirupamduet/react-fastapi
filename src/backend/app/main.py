# backend/main.py

from fastapi import FastAPI, Depends
from starlette.requests import Request
import uvicorn

from app.core import config
from app.services.auth.auth_service import get_current_active_user
from app.db.session import SessionLocal
from fastapi.middleware.cors import CORSMiddleware

# API Routers
from app.api.api_v1.routers.auth import auth_router
from app.api.api_v1.routers.customer import customer_router
from app.api.api_v1.routers.customer_role import customer_role_router

app = FastAPI(
    title=config.settings.PROJECT_NAME,
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=config.settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# DB session middleware (adds `request.state.db`)
@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response

@app.get("/api")
async def root():
    return {"message": "Welcome to the API"}

# Auth routes (login, register, token)
app.include_router(auth_router, prefix="/api", tags=["auth"])

# Customer routes (CRUD)
app.include_router(
    customer_router,
    prefix="/api/customers",
    tags=["customers"],
    dependencies=[Depends(get_current_active_user)],
)


# Customer Role routes (CRUD)
app.include_router(
    customer_role_router,
    prefix="/api/customer-roles",
    tags=["customer_roles"],
    dependencies=[Depends(get_current_active_user)],
)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True)
