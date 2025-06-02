from sqlalchemy.orm import Session
from app.models.customers.customer import Customer
from app.schemas.customers.customer import CustomerCreate
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def get_customer_by_email(db: Session, email: str):
    return db.query(Customer).filter(Customer.email == email).first()

def get_customer_by_sap_id_or_domain_id(db: Session, id: str):
    return db.query(Customer).filter(Customer.sap_id == id).first()
    #if customer:
    #    return customer
    
    # If no customer found by SAP ID, check by domain ID
    #return db.query(Customer).filter(Customer.domain_id == id).first()

def create_customer(db: Session, customer: CustomerCreate):
    hashed_password = get_password_hash(customer.password)
    db_customer = Customer(
        email=customer.email,
        username=customer.username,
        password_hash=hashed_password,
        active=True,
    )
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer
