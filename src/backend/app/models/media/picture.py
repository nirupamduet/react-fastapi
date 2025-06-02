from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, LargeBinary, DateTime
from datetime import datetime
from app.db.database import Base
from sqlalchemy.orm import relationship

class Picture(Base):
    __tablename__ = "pictures"

    id = Column(Integer, primary_key=True, index=True)
    picture_binary_id = Column(Integer, ForeignKey("picture_binaries.id"), nullable=True)
    mime_type = Column(String(20), nullable=True)
    seo_filename = Column(String(300), nullable=True)
    alt_attribute = Column(String(300), nullable=True)
    title_attribute = Column(String(300), nullable=True)
    is_new = Column(Boolean, default=True)
    created_on_utc = Column(DateTime, default=datetime.utcnow)

    picture_binary = relationship("PictureBinary", backref="pictures")
