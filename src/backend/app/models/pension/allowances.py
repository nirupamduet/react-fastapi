from sqlalchemy import Column, DateTime, Integer, String
from db.base_class import Base
from sqlalchemy import Enum

class AllowanceTypeEnum(Enum):
    BASIC_PAY = 'Basic Pay'
    DEARNESS_ALLOWANCE = 'Dearness Allowance'
    MEDICAL_ALLOWANCE = 'Medical Allowance'
    FESTIVAL_BONUS = 'Festival Bonus'
    NABABARSHA_VATA = 'Nababarsha vata'
    BIJOY_DIBOS_VATA = 'Bijoy Dibos vata'
    SPECIAL_BONUS = 'Special Bonus'

class GrossOrPercentageEnum(Enum):
    GROSS = 'gross'
    PERCENTAGE = 'percentage'

class Allowance(Base):
    __tablename__ = 'allowances'

    id = Column(Integer, primary_key=True, autoincrement=True)
    allowance_type = Column(Enum(AllowanceTypeEnum), nullable=False)
    condition_id = Column(Integer, nullable=True)
    allowance_amount = Column(Integer, nullable=True)
    gross_or_percentage = Column(Enum(GrossOrPercentageEnum), default=GrossOrPercentageEnum.PERCENTAGE)
    ins_upd_user = Column(String(50), nullable=True)
    status = Column(Integer, default=0)
    active_inactive = Column(Integer, default=1)
    ins_upd_time = Column(DateTime, default='CURRENT_TIMESTAMP', onupdate='CURRENT_TIMESTAMP')
    ins_upd_ip = Column(String(50), nullable=True)
    ins_upd_host = Column(String(50), nullable=True)
    ins_upd_db_user = Column(String(50), nullable=True)
    activate_by = Column(String(255), nullable=True)
    deactivate_by = Column(String(255), nullable=True)
