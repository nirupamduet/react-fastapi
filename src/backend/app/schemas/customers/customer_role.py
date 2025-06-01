from pydantic import BaseModel
from typing import Optional

class CustomerRoleBase(BaseModel):
    name: str
    system_name: str
    is_active: Optional[bool] = True
    is_system_role: Optional[bool] = False

class CustomerRoleCreate(CustomerRoleBase):
    pass

class CustomerRoleOut(CustomerRoleBase):
    id: int

    class Config:
        orm_mode = True
