from sqlalchemy import Table, Column, Integer, String, ForeignKey
from app.db.database import Base

# models/customer_customer_role.py (or wherever your models are defined)
from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.orm import declarative_base

customer_customer_role = Table(
    "customer_customer_role",
    Base.metadata,
    Column("customer_sap_id", ForeignKey("customers.sap_id"), primary_key=True),
    Column("customer_role_id", ForeignKey("customer_roles.id"), primary_key=True)
)