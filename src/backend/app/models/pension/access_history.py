from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class AccessHistory(Base):
    __tablename__ = 'accesshistory'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(10), nullable=False)
    login_time = Column(DateTime, nullable=True)
    logout_time = Column(DateTime, nullable=True)
    session_id = Column(String(255), nullable=False)
    ip_address = Column(String(48), nullable=False)
