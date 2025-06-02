from sqlalchemy import Table, Column, Integer, String, ForeignKey
from app.db.database import Base

customer_customer_role = Table(
    'customer_customer_role',
    Base.metadata,
    Column('customer_sap_id', String(8), ForeignKey('customers.sap_id'), primary_key=True),
    Column('customer_role_id', Integer, ForeignKey('customer_roles.id'), primary_key=True),
)
