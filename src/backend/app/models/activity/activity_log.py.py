from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from .base import Base

class ActivityLog(Base):
    __tablename__ = 'activitylog'

    id = Column(Integer, primary_key=True, autoincrement=True)
    activity_log_type_id = Column(Integer, ForeignKey('activitylogtype.id', ondelete='CASCADE'), nullable=False)
    customer_id = Column(Integer, ForeignKey('customer.sap_id', ondelete='CASCADE'), nullable=False)
    comment = Column(String, nullable=False)
    created_on_utc = Column(DateTime, nullable=False)
    ip_address = Column(String(200), nullable=True)
    entity_id = Column(Integer, nullable=True)
    entity_name = Column(String(400), nullable=True)
