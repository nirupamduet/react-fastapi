from sqlalchemy import Column, Integer, String
from app.db.database import Base
from sqlalchemy.orm import relationship

class PermissionRecord(Base):
    __tablename__ = "permission_records"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, unique=True)
    system_name = Column(String(255), nullable=False, unique=True)
    category = Column(String(255), nullable=True)

    ##roles = relationship("PermissionRecordCustomerRoleMapping", back_populates="permission_records", uselist=False)