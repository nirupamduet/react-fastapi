from app.models.activity import ActivityLog, ActivityLogType
from app.models.customers import Customer

from sqlalchemy.orm import relationship

# Relationships
ActivityLogType.activity_logs = relationship(
    "ActivityLog",
    back_populates="activity_log_type",
    cascade="all, delete-orphan"
)

Customer.activity_logs = relationship(
    "ActivityLog",
    back_populates="customer",
    cascade="all, delete-orphan"
)

ActivityLog.activity_log_type = relationship(
    "ActivityLogType",
    back_populates="activity_logs"
)

ActivityLog.customer = relationship(
    "Customer",
    back_populates="activity_logs"
)
