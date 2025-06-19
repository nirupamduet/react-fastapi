from sqlalchemy import Column, Integer, String

from db.base_class import Base


class AllowanceCondition(Base):
    __tablename__ = 'allowance_condition'

    id = Column(Integer, primary_key=True)
    condition_title = Column(String(255), nullable=False)
    min_val = Column(Integer, nullable=False)
    max_val = Column(Integer, nullable=False)
