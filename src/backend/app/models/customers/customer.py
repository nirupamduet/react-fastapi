from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.db.database import Base

## Customer Model
class Customer(Base):
    __tablename__ = 'customers'

    sap_id = Column(String(8), primary_key=True, index= True)
    domain_id = Column(String(20), unique = True, nullable=True)
    email = Column(String(255), nullable=True)
    email_to_revalidate = Column(String(255), nullable=True)
    admin_comment = Column(String(255), nullable=True)

    require_re_login = Column(Boolean, default=False)
    failed_login_attempts = Column(Integer, default=0)
    cannot_login_until_date_utc = Column(DateTime, nullable=True)

    is_active = Column(Boolean, default=True)
    deleted = Column(Boolean, default=False)
    is_system_account = Column(Boolean, default=False)

    system_name = Column(String(400), nullable=True)
    last_ip_address = Column(String(45), nullable=True)

    created_on_utc = Column(DateTime, default=datetime.utcnow)
    last_login_date_utc = Column(DateTime, nullable=True)
    last_activity_date_utc = Column(DateTime, default=datetime.utcnow)

    # Foreign key IDs
    #office_id = Column(Integer, ForeignKey('offices.id'), nullable=True)
    #epartment_id = Column(Integer, ForeignKey('departments.id'), nullable=True)
    #section_id = Column(Integer, ForeignKey('sections.id'), nullable=True)

    # Code columns (not foreign keys)
    office_code = Column(String(100), nullable=True)
    department_code = Column(String(100), nullable=True)
    section_code = Column(String(100), nullable=True)

    # Relationships WITHOUT back_populates (one-way)
    # office = relationship("Office")
    # department = relationship("Department")
    # section = relationship("Section")

    password = relationship("CustomerPassword")

    roles = relationship(
        "CustomerRole",
        secondary="customer_customer_role",
        back_populates="customers"
    )
