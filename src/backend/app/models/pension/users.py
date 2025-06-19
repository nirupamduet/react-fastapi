from sqlalchemy import (
    Column, Integer, String, Float, Enum, SmallInteger, DateTime, TIMESTAMP, Text
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()

# 1. sms_info model
class SmsInfo(Base):
    __tablename__ = 'sms_info'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, nullable=True)
    sms_body = Column(Text, nullable=True)
    sms_sent_time = Column(DateTime, default=func.current_timestamp())
    ins_upd_user = Column(String(50), nullable=True)
    status = Column(SmallInteger, nullable=False, default=0, comment='0=entry by maker, 1=accepted by checker, 1=rejected by checker')
    active_inactive = Column(SmallInteger, nullable=False, comment='0=Inactive, 1=Active')
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(50), nullable=True)
    ins_upd_host = Column(String(50), nullable=True)
    ins_upd_db_user = Column(String(50), nullable=True)
    activate_by = Column(String(255), nullable=True)
    deactivate_by = Column(String(255), nullable=True)


# 2. state model
class State(Base):
    __tablename__ = 'state'

    state_id = Column(Integer, primary_key=True, autoincrement=True)
    country_id = Column(Integer, nullable=False)
    state_name = Column(String(250), nullable=False)


# 3. transactions model
class Transaction(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    amount = Column(Float, nullable=True)
    payment_method = Column(Enum('Bank Advice', 'Cheque', 'EFT', name='payment_method_enum'), nullable=False)
    payment_to_account_no = Column(String(30), nullable=True)
    payment_to_cheque_no = Column(String(30), nullable=True)
    payment_to_advice_no = Column(String(30), nullable=True)
    payment_to_bank_id = Column(Integer, nullable=False)
    payment_to_branch_id = Column(Integer, nullable=False)
    paid_unpaid = Column(Enum('Paid', 'Unpaid', name='paid_unpaid_enum'), nullable=False)
    validity_date = Column(TIMESTAMP, nullable=True, comment='Validity date for issued cheque')
    cancellation_date = Column(TIMESTAMP, nullable=True, comment='Cheque Cancellation Date')
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0, comment='0=entry by maker, 1=accepted by checker, 1=rejected by checker')
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 4. user_categories model
class UserCategory(Base):
    __tablename__ = 'user_categories'

    id = Column(Integer, primary_key=True, autoincrement=True)
    category_name = Column(String(100), nullable=False)
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0, comment='0=entry by maker, 1=accepted by checker, 1=rejected by checker')
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 5. user_categories_pages model
class UserCategoryPage(Base):
    __tablename__ = 'user_categories_pages'

    id = Column(Integer, primary_key=True, autoincrement=True)
    page_id = Column(Integer, nullable=False)
    user_category_id = Column(Integer, nullable=False)
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0, comment='0=entry by maker, 1=accepted by checker, 1=rejected by checker')
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)


# 6. userinfo_pension model
class UserInfoPension(Base):
    __tablename__ = 'userinfo_pension'

    user_id = Column(Integer, primary_key=True)
    sap_id = Column(String(20), nullable=True)
    user_name = Column(String(200), nullable=True)
    user_designation = Column(String(255), nullable=True)
    user_desig_level = Column(SmallInteger, nullable=True)
    user_logonname = Column(String(15), nullable=True)
    role_id = Column(SmallInteger, nullable=True)
    role_name = Column(String(50), nullable=False)
    office = Column(String(40), nullable=True)
    active = Column(SmallInteger, nullable=True)


# 7. users model
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), nullable=False)
    password = Column(String(250), nullable=False)
    password_cng_flg = Column(SmallInteger, nullable=False, default=0, comment='0=default password, 1=user changed the password')
    password_creation_time = Column(TIMESTAMP, nullable=False, default=func.current_timestamp(), onupdate=func.current_timestamp())
    full_name = Column(String(100), nullable=False)
    gender = Column(Enum('male', 'female', name='gender_enum'), nullable=False)
    email = Column(String(100), nullable=False)
    cell_phone = Column(String(50), nullable=False)
    designation_id = Column(Integer, nullable=False)
    office_address = Column(String(155), nullable=False)
    office_phone = Column(String(50), nullable=False)
    user_category_id = Column(Integer, nullable=False)
    branch_id = Column(Integer, nullable=False)
    login_attempts = Column(Integer, default=0)
    last_login_time = Column(TIMESTAMP, nullable=True)
    last_login_ip = Column(String(10), nullable=True)
    lock_unlock = Column(SmallInteger, nullable=False, default=1, comment='0=lock, 1=unlock; for system, multiple attempts')
    active_inactive = Column(SmallInteger, nullable=False, default=1, comment='0=active, 1=inactive')
    remarks = Column(String(155), nullable=True)
    ins_upd_user = Column(Integer, nullable=True)
    status = Column(SmallInteger, nullable=False, default=0, comment='0=entry by maker, 1=accepted by checker, -1=rejected by checker')
    ins_upd_time = Column(TIMESTAMP, nullable=True, default=func.current_timestamp(), onupdate=func.current_timestamp())
    ins_upd_ip = Column(String(10), nullable=True)
    ins_upd_host = Column(String(10), nullable=True)
    ins_upd_db_user = Column(String(10), nullable=True)
