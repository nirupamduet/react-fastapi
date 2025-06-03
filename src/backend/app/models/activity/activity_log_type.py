from sqlalchemy import Column, Integer, String, Boolean

from db.database import Base

class ActivityLogType(Base):
    __tablename__ = 'activitylogtype'

    id = Column(Integer, primary_key=True, autoincrement=True)
    system_keyword = Column(String(100), nullable=False)
    name = Column(String(200), nullable=False)
    enabled = Column(Boolean, nullable=False)
