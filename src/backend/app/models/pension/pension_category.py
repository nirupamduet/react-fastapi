from sqlalchemy import Column, Integer, String, Date, Enum, SmallInteger, Decimal, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()

# 1. pensioner_categories model
class PensionerCategory(Base):
    __tablename__ = 'pensioner_categories'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    active_inactive = Column(SmallInteger, default=0, nullable=False, comment="0=inactive, 1=active")


# 2. pensionercat_allowances model
class PensionerCatAllowance(Base):
    __tablename__ = 'pensionercat_allowances'

    id = Column(Integer, primary_key=True, autoincrement=True)
    category_id = Column(Integer, nullable=False)
    allowance_id = Column(Integer, nullable=False)
    status = Column(Integer, nullable=False)


# 3. personal_info model
class PersonalInfo(Base):
    __tablename__ = 'personal_info'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False)
    father_name = Column(String(255), nullable=False)
    mother_name = Column(String(255), nullable=False)
    spouse_name = Column(String(255), default=None)
    gender = Column(String(20), nullable=False)
    blood_group = Column(String(16), default=None)
    birth_date = Column(Date, default=None)
    nationality = Column(String(255), nullable=False)
    nid_no = Column(String(30), default=None)
    birth_reg_no = Column(String(100), default=None)
    passport_no = Column(String(100), default=None)
    religion = Column(String(100), nullable=False)
    educational_qualification = Column(String(255), default=None)
    organization = Column(Integer, nullable=False)
    designation = Column(Integer, nullable=False)
    address = Column(Integer, nullable=False)
    pre_vill = Column(String(255), nullable=False)
    pre_district = Column(String(200), nullable=False)
    pre_upazilla_thana = Column(String(200), nullable=False)
    per_vill = Column(String(255), nullable=False)
    per_district = Column(String(200), nullable=False)
    per_upazilla_thana = Column(String(200), nullable=False)
    contact_no = Column(String(255), nullable=False)
    email = Column(String(255), default=None)
    image_url = Column(String(255), nullable=False)
    sign_url = Column(String(255), nullable=False)
    ins_upd_time = Column(TIMESTAMP, nullable=False, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_usr = Column(String(255), nullable=False)
    ins_upd_ip = Column(String(255), nullable=False)
    ins_upd_host = Column(String(255), nullable=False)


# 4. poa_history model
class PoaHistory(Base):
    __tablename__ = 'poa_history'

    id = Column(Integer, primary_key=True, autoincrement=True)
    emp_nom_id = Column(Integer, nullable=False, comment="Employee or nominee id")
    type = Column(SmallInteger, nullable=False, comment="1=Employee, 2=Nominee")
    poa_file = Column(String(100), default=None)
    poa_validity_date = Column(String(15), default=None)
    remarks = Column(String(255), nullable=False)
    status = Column(SmallInteger, default=0, nullable=False, comment="0=initiated by maker, 1=accepted by checker")
    ins_upd_time = Column(TIMESTAMP, nullable=False, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(255), default=None)
    ins_upd_host = Column(String(255), default=None)
    ins_upd_user = Column(String(255), default=None)
    ins_upd_db_user = Column(String(20), nullable=False)


# 5. salaries model
class Salary(Base):
    __tablename__ = 'salaries'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, nullable=True)
    nominee_id = Column(Integer, nullable=True)
    gross_amount = Column(Decimal(14, 2), nullable=True)
    salary_month = Column(Integer, nullable=True, comment="1-12")
    salary_year = Column(Integer, nullable=True, comment="2017, 2018, etc.")
    salary_type = Column(Enum('Regular', 'Allowance', 'Areear', name='salary_type_enum'), nullable=False)
    date_of_payment = Column(Date, nullable=True, comment="Date of Payment")
    payment_status = Column(Enum('Paid to Account', 'Cheque issued', 'Cheque Reissued', 'Cheque Delivered', 
                                 'Cheque Cancelled', 'Cheque Cleared/Paid/Cash Withdrawn', name='payment_status_enum'), 
                           nullable=True)
    transaction_id = Column(Integer, nullable=True)
    ins_upd_user = Column(String(10), nullable=True)
    status = Column(SmallInteger, default=0, nullable=False, comment="0=entry by maker, 1=accepted by checker, 2=rejected")
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 6. salary_breakdowns model
class SalaryBreakdown(Base):
    __tablename__ = 'salary_breakdowns'

    id = Column(Integer, primary_key=True, autoincrement=True)
    salary_id = Column(Integer, nullable=False)
    allowance_id = Column(Integer, nullable=True)
    allowance_amount = Column(Decimal(14, 4), nullable=True)
    pay_type = Column(String(255), default="Regular", nullable=False)
    ins_upd_user = Column(String(10), nullable=True)
    status = Column(SmallInteger, default=0, nullable=False, comment="0=entry by maker, 1=accepted by checker, 2=rejected")
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)
    remarks = Column(String(255), nullable=False)


# 7. salary_data_as400 model
class SalaryDataAs400(Base):
    __tablename__ = 'salary_data_as400'

    CNG = Column(Integer, nullable=True)
    OFFICE = Column(Integer, nullable=True)
    SLNO = Column(Integer, nullable=True)
    INDX = Column(String(255), nullable=True)
    DSG = Column(Integer, nullable=True)
    DPT = Column(Integer, nullable=True)
    PRD = Column(String(255), nullable=True)
    BASIC = Column(Decimal(10, 0), nullable=True)
    FRB = Column(Decimal(10, 0), nullable=True)
    HALW = Column(Decimal(10, 0), nullable=True)
    DRS = Column(Decimal(10, 0), nullable=True)
    CNV = Column(Decimal(10, 0), nullable=True)
    MDL = Column(Decimal(10, 0), nullable=True)
    ENTRTAIN = Column(Decimal(10, 0), nullable=True)
    STPN = Column(Decimal(10, 0), nullable=True)
    WASH = Column(Decimal(10, 0), nullable=True)
    PFBNK = Column(Decimal(10, 0), nullable=True)
    PFOWN = Column(Decimal(10, 0), nullable=True)
    GPF = Column(Decimal(10, 0), nullable=True)
    WATER = Column(Decimal(10, 0), nullable=True)
    GAS = Column(Decimal(10, 0), nullable=True)
    BUS = Column(Decimal(10, 0), nullable=True)
    HRP = Column(Decimal(10, 0), nullable=True)
    BSP = Column(Decimal(10, 0), nullable=True)
    COP = Column(Decimal(10, 0), nullable=True)
    TPY = Column(Decimal(10, 0), nullable=True)
    NFD = Column(Decimal(10, 0), nullable=True)
    BANK = Column(Decimal(10, 0), nullable=True)
    TMP = Column(Decimal(10, 0), nullable=True)
    CYCL = Column(Decimal(10, 0), nullable=True)
    MCAR = Column(Decimal(10, 0), nullable=True)
    HBA = Column(Decimal(10, 0), nullable=True)
    CPFADV = Column(Decimal(10, 0), nullable=True)
    GPFADV = Column(Decimal(10, 0), nullable=True)
    SUB1 = Column(Decimal(10, 0), nullable=True)
    SUBAMT1 = Column(Decimal(10, 0), nullable=True)
    SUB2 = Column(Decimal(10, 0), nullable=True)
    SUBAMT2 = Column(Decimal(10, 0), nullable=True)
    SUB3 = Column(Decimal(10, 0), nullable=True)
    SUBAMT3 = Column(Decimal(10, 0), nullable=True)
    SUB4 = Column(Decimal(10, 0), nullable=True)
    SUBAMT4 = Column(Decimal(10, 0), nullable=True)
    SUB5 = Column(Decimal(10, 0), nullable=True)
    SUBAMT5 = Column(Decimal(10, 0), nullable=True)
    MISD1 = Column(Decimal(10, 0), nullable=True)
    MISCAMT1 = Column(Decimal(10, 0), nullable=True)
    MISCD2 = Column(Decimal(10, 0), nullable=True)
    MISCAMT2 = Column(Decimal(10, 0), nullable=True)
    MISCD3 = Column(Decimal(10, 0), nullable=True)
    MISCAMT3 = Column(Decimal(10, 0), nullable=True)
    MISCD4 = Column(Decimal(10, 0), nullable=True)
    MISCAMT4 = Column(Decimal(10, 0), nullable=True)
    MISCD5 = Column(Decimal(10, 0), nullable=True)
    MISCAMT5 = Column(Decimal(10, 0), nullable=True)
    MISCD6 = Column(Decimal(10, 0), nullable=True)
    MISCAMT6 = Column(Decimal(10, 0), nullable=True)
    MISCD7 = Column(Decimal(10, 0), nullable=True)
    MISCAMT7 = Column(Decimal(10, 0), nullable=True)
    MISCD8 = Column(Decimal(10, 0), nullable=True)
    MISCAMT8 = Column(Decimal(10, 0), nullable=True)
    MISCD9 = Column(Decimal(10, 0), nullable=True)
    MISCAMT9 = Column(Decimal(10, 0), nullable=True)
    MISCD10 = Column(Decimal(10, 0), nullable=True)
    MISCAMT10 = Column(Decimal(10, 0), nullable=True)
    NAME = Column(String(255), nullable=True)
    DSGN = Column(String(255), nullable=True)
    DEPTNAME = Column(String(255), nullable=True)
    BNKNAM = Column(String(255), nullable=True)
    ACCNT = Column(String(255), nullable=True)
    TSCAL = Column(String(255), nullable=True)
    REMARKS = Column(String(255), nullable=True)
    FOLIO = Column(String(255), nullable=True)
    NETPAY = Column(Decimal(10, 0), nullable=True)
    MINUSPAY = Column(Decimal(10, 0), nullable=True)
