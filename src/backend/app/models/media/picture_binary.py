from sqlalchemy import Column, Integer, String, Boolean, LargeBinary, DateTime
from datetime import datetime
from app.db.database import Base

class PictureBinary(Base):
    __tablename__ = "picture_binaries"

    id = Column(Integer, primary_key=True, index=True)
    binary_data = Column(LargeBinary, nullable=False)
