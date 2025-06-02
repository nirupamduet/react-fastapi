from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Enum, Text, ForeignKey
from app.db.database import Base
from app.models.logging.log_level import LogLevel

class Log(Base):
    __tablename__ = 'logs'

    id = Column(Integer, primary_key=True, index=True)
    log_level = Column(Enum(LogLevel), nullable=False)
    short_message = Column(String(500), nullable=False)
    full_message = Column(Text, nullable=True)
    ip_address = Column(String(45), nullable=True)   # IPv6 max length 45
    customer_sap_id = Column(String(8), ForeignKey('customers.sap_id'), nullable=True)
    page_url = Column(String(255), nullable=True)
    referrer_url = Column(String(255), nullable=True)
    created_on_utc = Column(DateTime, default=datetime.utcnow, nullable=False)
