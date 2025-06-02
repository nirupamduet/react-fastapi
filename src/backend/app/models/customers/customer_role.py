from sqlalchemy import Column, Integer, String, Boolean
from app.db.database import Base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.database import Base

class CustomerRole(Base):
    __tablename__ = 'customer_roles'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    system_name = Column(String(50), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)
    is_system_role = Column(Boolean, default=False)