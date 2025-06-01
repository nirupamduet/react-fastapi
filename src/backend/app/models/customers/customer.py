from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.database import Base

class Customer(Base):
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, nullable=False)
    username = Column(String(50), unique=True)
    is_active = Column(Boolean, default=True)
    created_on = Column(DateTime, default=datetime.utcnow)
    last_login_date = Column(DateTime, nullable=True)

    # Relationship to password
    password = relationship("CustomerPassword", back_populates="customer", uselist=False)

    # Relationship to roles (many-to-many)
    roles = relationship(
        "CustomerRole",
        secondary="customer_customer_role",
        back_populates="customers"
    )
