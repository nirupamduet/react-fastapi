from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.database import Base

class CustomerPassword(Base):
    __tablename__ = 'customer_passwords'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    password = Column(String(255), nullable=False)
    password_format_id = Column(Integer, nullable=False)  # Refers to PasswordFormat enum
    password_salt = Column(String(255), nullable=True)

    customer = relationship("Customer", back_populates="password")
