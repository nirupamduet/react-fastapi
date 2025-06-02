from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field


class LogLevel(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"


class LogBase(BaseModel):
    log_level: LogLevel = Field(..., description="Severity level of the log")
    short_message: str = Field(..., max_length=500, description="Brief message summary")
    full_message: Optional[str] = Field(None, description="Detailed message or stack trace")
    ip_address: Optional[str] = Field(None, max_length=45, description="IP address of the client")
    customer_id: Optional[int] = Field(None, description="ID of related customer")
    page_url: Optional[str] = Field(None, max_length=255, description="URL of the page where log originated")
    referrer_url: Optional[str] = Field(None, max_length=255, description="Referrer URL")
    

class LogCreate(LogBase):
    pass  # All fields required to create a log


class LogRead(LogBase):
    id: int
    created_on_utc: datetime

    class Config:
        orm_mode = True


class LogUpdate(BaseModel):
    log_level: Optional[LogLevel]
    short_message: Optional[str] = Field(None, max_length=500)
    full_message: Optional[str]
    ip_address: Optional[str] = Field(None, max_length=45)
    customer_id: Optional[int]
    page_url: Optional[str] = Field(None, max_length=255)
    referrer_url: Optional[str] = Field(None, max_length=255)
