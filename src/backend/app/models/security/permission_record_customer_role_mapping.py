from sqlalchemy import Column, Integer, ForeignKey
from app.db.database import Base

class PermissionRecordCustomerRoleMapping(Base):
    __tablename__ = "permission_record_customer_role_mapping"

    id = Column(Integer, primary_key=True, index=True)
    permission_record_id = Column(Integer, ForeignKey('permission_records.id'), nullable=False)
    customer_role_id = Column(Integer, ForeignKey('customer_roles.id'), nullable=False)
