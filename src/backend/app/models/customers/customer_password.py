from sqlalchemy import Column, Integer, String, ForeignKey
from app.db.database import Base

class CustomerPassword(Base):
    __tablename__ = "customer_passwords"

    id = Column(Integer, primary_key=True, index=True)
    customer_sap_id = Column(String(8), ForeignKey("customers.sap_id"))
    password_hash = Column(String(255))
    