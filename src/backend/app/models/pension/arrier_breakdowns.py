from sqlalchemy import Column, DateTime, Float, Integer, String

from db.base_class import Base

class ArrierBreakdown(Base):
    __tablename__ = 'arrier_breakdowns'

    id = Column(Integer, primary_key=True, autoincrement=True)
    salary_id = Column(Integer, nullable=False)
    allowance_id = Column(Integer, nullable=False)
    allowance_amount = Column(Float, nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(Integer, default=0)
    ins_upd_time = Column(DateTime, default='CURRENT_TIMESTAMP', onupdate='CURRENT_TIMESTAMP')
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)
