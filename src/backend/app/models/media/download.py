from sqlalchemy import Column, Integer, String, Boolean, LargeBinary, DateTime
from datetime import datetime
from app.db.database import Base

class Download(Base):
    __tablename__ = "downloads"

    id = Column(Integer, primary_key=True, index=True)
    download_guid = Column(String(64), nullable=False, unique=True)
    use_download_url = Column(Boolean, default=False)
    download_url = Column(String(256), nullable=True)
    download_binary = Column(LargeBinary, nullable=True)
    content_type = Column(String(20), nullable=True)
    filename = Column(String(100), nullable=True)
    extension = Column(String(10), nullable=True)
    is_new = Column(Boolean, default=True)
    created_on_utc = Column(DateTime, default=datetime.utcnow)
