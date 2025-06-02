# app/models/settings.py

from sqlalchemy import Column, Integer, String
from app.db.database import Base

class Setting(Base):
    __tablename__ = "settings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False, unique=True)
    value = Column(String(2000), nullable=True)
