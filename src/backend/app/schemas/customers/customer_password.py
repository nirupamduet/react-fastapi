from pydantic import BaseModel, constr
from typing import Optional
from schemas.customers.password_format import PasswordFormat

class CustomerPasswordBase(BaseModel):
    password: constr(min_length=6)  # plaintext or hashed depending on usage
    password_format_id: PasswordFormat
    password_salt: Optional[str]

class CustomerPasswordCreate(CustomerPasswordBase):
    pass

# No "Out" schema because you don't expose passwords via API
