from sqlalchemy import Column, Integer, String, Float, Date, DateTime, Enum, SmallInteger, BigInteger, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

Base = declarative_base()


# 1. fi_branch model
class FiBranch(Base):
    __tablename__ = 'fi_branch'

    FI_ID = Column(Integer, primary_key=True)
    FI_NM = Column(String(255), nullable=False)
    FI_BRANCH_ID = Column(Integer, nullable=False)
    BRANCH_NAME = Column(Integer, nullable=False)  # Ideally this should be varchar or string
    DIVISION = Column(String(50), nullable=False)
    DISTRICT = Column(String(100), nullable=False)
    THANA_UPAZILLA = Column(String(100), nullable=False)
    STATUS = Column(SmallInteger, nullable=False)


# 2. fis model
class Fis(Base):
    __tablename__ = 'fis'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    alias = Column(String(30), nullable=False)
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 3. gpf_data_old model
class GpfDataOld(Base):
    __tablename__ = 'gpf_data_old'

    ID = Column(Integer, primary_key=True, autoincrement=True)
    SERIAL_N = Column(BigInteger, nullable=True)
    PERIOD_M = Column(Integer, nullable=True)
    PERIOD_Y = Column(Integer, nullable=True)
    OFFICE_CD = Column(Integer, nullable=True)
    DESIG_CD = Column(Integer, nullable=True)
    INT_BERAR = Column(Integer, nullable=True)
    INDEX_NO = Column(Text, nullable=True)
    WINDEX = Column(Text, nullable=True)
    MEM_SUB_MN = Column(Float, nullable=True)
    ARR_SUB_MN = Column(Float, nullable=True)
    AVV_DBT_MN = Column(Float, nullable=True)
    ADV_RCV_MN = Column(Float, nullable=True)
    INS_PRM_MN = Column(Float, nullable=True)
    INS_CRD_MN = Column(Float, nullable=True)
    MEM_DBT_MN = Column(Float, nullable=True)
    DBT_BAL_NW = Column(Float, nullable=True)
    CRD_BAL_NW = Column(Float, nullable=True)
    WORK1 = Column(Float, nullable=True)
    WORK2 = Column(Float, nullable=True)
    WORK3 = Column(Float, nullable=True)
    WORK4 = Column(Float, nullable=True)
    WORK5 = Column(Float, nullable=True)
    WORK6 = Column(Float, nullable=True)
    WORK7 = Column(Float, nullable=True)
    WORK8 = Column(Float, nullable=True)
    WORK9 = Column(Float, nullable=True)
    INTRST_YR = Column(Float, nullable=True)
    INTRST_MN = Column(Float, nullable=True)
    WORK10 = Column(Float, nullable=True)
    INTRST_PV = Column(Float, nullable=True)
    MEM_SUB_YR = Column(Float, nullable=True)
    MEM_CRD_BG = Column(Float, nullable=True)
    MEM_DBT_YR = Column(Float, nullable=True)
    MEM_DBT_BG = Column(Float, nullable=True)
    ADV_DBT_YR = Column(Float, nullable=True)
    ADV_RCV_YR = Column(Float, nullable=True)
    INS_CRD_YR = Column(Float, nullable=True)
    INS_PRM_YR = Column(Float, nullable=True)
    CUR_BALANC = Column(Float, nullable=True)
    PRV_BALANC = Column(Float, nullable=True)
    NAME = Column(Text, nullable=True)
    DESIG = Column(Text, nullable=True)
    NP = Column(Text, nullable=True)
    DP = Column(Text, nullable=True)


# 4. grade model
class Grade(Base):
    __tablename__ = 'grade'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    active_inactive = Column(SmallInteger, nullable=False, default=1)  # 0 = active, 1 = inactive
    remarks = Column(String(155), nullable=True)
    increment_amount = Column(Float, nullable=True)
    increment_type = Column(Enum('gross', 'percentage', name='increment_type_enum'), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 5. import_basic_2023_18122024 model
class ImportBasic202318122024(Base):
    __tablename__ = 'import_basic_2023_18122024'

    employee_id = Column(Integer, nullable=True)
    sap_id = Column(String(20), nullable=True)
    basic = Column(Float, nullable=True)
    id = Column(Integer, primary_key=True, autoincrement=True)


# 6. items model
class Items(Base):
    __tablename__ = 'items'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=func.current_timestamp())
    updated_at = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())


# 7. nmc_history model
class NmcHistory(Base):
    __tablename__ = 'nmc_history'

    id = Column(Integer, primary_key=True, autoincrement=True)
    emp_nom_id = Column(Integer, nullable=False)
    type = Column(SmallInteger, nullable=False)
    non_marriage_cert = Column(String(100), nullable=True)
    non_marriage_cert_validity = Column(String(15), nullable=True)
    remarks = Column(String(255), nullable=False)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(20), nullable=False)
    ins_upd_host = Column(String(50), nullable=False)
    ins_upd_user = Column(String(20), nullable=False)
    ins_upd_db_user = Column(String(20), nullable=False)


# 8. nominees model
class Nominees(Base):
    __tablename__ = 'nominees'

    id = Column(Integer, primary_key=True, autoincrement=True)
    ppo_no = Column(Integer, nullable=False)
    file_no = Column(Integer, nullable=False)
    employee_id = Column(Integer, nullable=True)
    full_name = Column(String(100), nullable=False)
    gender = Column(String(20), nullable=False)
    nid_no = Column(String(15), nullable=False)
    relation = Column(String(50), nullable=False)
    marital_status = Column(Enum('Married', 'Widowed', 'Separated', 'Divorced', 'Unmarried', name='marital_status_enum'), nullable=False)
    physical_status = Column(Enum('Fit', 'Handicapped', name='physical_status_enum'), nullable=False)
    pension_percentage = Column(Integer, nullable=True)
    email = Column(String(100), nullable=False)
    cell_phone = Column(String(50), nullable=False)
    present_address = Column(String(155), nullable=False)
    permanent_address = Column(String(155), nullable=False)
    pension_provider_branch_id = Column(Integer, nullable=False)
    dob_time = Column(Date, nullable=True)
    dod_time = Column(Date, nullable=True)
    proof_of_alive = Column(String(255), nullable=True)
    proof_of_alive_validity = Column(Date, nullable=True)
    non_marriage_cert = Column(String(100), nullable=True)
    non_marriage_cert_validity = Column(Date, nullable=True)
    lock_unlock = Column(SmallInteger, nullable=False, default=1)
    active_inactive = Column(SmallInteger, nullable=False, default=1)
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(String(20), nullable=True)
    status = Column(SmallInteger, nullable=False, default=0)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(255), nullable=True)
    ins_upd_host = Column(String(255), nullable=True)
    ins_upd_db_user = Column(String(255), nullable=True)
    image_url = Column(String(255), nullable=False)
    stop_payment = Column(Boolean, nullable=False)
    effective_date_of_stop_payment = Column(Date, nullable=True)
    reason = Column(String(255), nullable=False)
    pensioner_catid = Column(Integer, nullable=False)


# 9. pages model
class Pages(Base):
    __tablename__ = 'pages'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(155), nullable=False)
    url_controller = Column(String(100), nullable=False)
    url_action = Column(String(100), nullable=False)
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 10. pension_basic_informations model
class PensionBasicInformations(Base):
    __tablename__ = 'pension_basic_informations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, nullable=True)
    nominee_id = Column(Integer, nullable=False, default=0)
    pension_basic = Column(Float, nullable=True)
    effective_date_pension_basic = Column(Date, nullable=True)
    previous_pension_basic = Column(Integer, nullable=True)
    effective_date_previous_basic = Column(Date, nullable=True)
    last_increment_date = Column(Date, nullable=True)
    next_increment_date = Column(Date, nullable=True)
    fixation_date = Column(Date, nullable=True)
    period_for_payment = Column(SmallInteger, nullable=True, default=1)
    remarks = Column(String(155), nullable=True)
    payment_method = Column(Enum('Cheque', 'EFTBBCOOP', 'EFTBANKS', name='payment_method_enum'), nullable=True)
    payment_to_account_no = Column(String(30), nullable=True)
    payment_to_bank_id = Column(Integer, nullable=True)
    payment_to_branch_id = Column(Integer, nullable=True)
    ins_upd_user = Column(String(10), nullable=True)
    status = Column(SmallInteger, nullable=False, default=0)
    ins_upd_time = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)
    pensioner_catid = Column(Integer, nullable=True)
    basic_2023 = Column(Float, nullable=True)
