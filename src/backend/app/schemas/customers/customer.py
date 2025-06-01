from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from app.schemas.customers.customer_role import CustomerRoleOut

class CustomerBase(BaseModel):
    email: EmailStr
    username: Optional[str]
    is_active: Optional[bool] = True

class CustomerCreate(CustomerBase):
    password: str
    role_ids: List[int] = []

class CustomerOut(CustomerBase):
    id: int
    created_on: datetime
    last_login_date: Optional[datetime]
    roles: List[CustomerRoleOut] = []

    class Config:
        orm_mode = True
