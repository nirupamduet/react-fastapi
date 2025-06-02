from sqlalchemy import Table, Column, Integer, String, ForeignKey
from app.db.database import Base

class CustomerCustomerRole(Base):
    __tablename__ = 'customer_customer_role'

    id = Column(Integer, primary_key=True, index=True)
    customer_sap_id = Column(String(8), ForeignKey('customers.sap_id'))
    customer_role_id = Column(Integer, ForeignKey('customer_roles.id'))