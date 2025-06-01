from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app import schemas, models
from app.api.deps import get_db
from passlib.context import CryptContext

customer_router = APIRouter(prefix="/customers", tags=["customers"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

@customer_router.post("/", response_model=schemas.customers.customer.CustomerOut, status_code=status.HTTP_201_CREATED)
def create_customer(customer_in: schemas.customers.customer.CustomerCreate, db: Session = Depends(get_db)):
    # Check duplicate email
    existing = db.query(models.Customer).filter(models.Customer.email == customer_in.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create customer
    customer = models.Customer(
        email=customer_in.email,
        username=customer_in.username,
    )

    # Assign roles
    if customer_in.role_ids:
        roles = db.query(models.CustomerRole).filter(models.CustomerRole.id.in_(customer_in.role_ids)).all()
        if len(roles) != len(customer_in.role_ids):
            raise HTTPException(status_code=400, detail="One or more roles not found")
        customer.roles = roles

    db.add(customer)
    db.commit()
    db.refresh(customer)

    # Create and hash password
    hashed_password = hash_password(customer_in.password)
    customer_password = models.CustomerPassword(
        customer_id=customer.id,
        password=hashed_password,
        password_format_id=1,  # Hashed
        password_salt=None
    )
    db.add(customer_password)
    db.commit()

    # Refresh to include roles
    db.refresh(customer)
    return customer

@customer_router.get("/", response_model=List[schemas.customers.customer.CustomerOut])
def list_customers(db: Session = Depends(get_db)):
    return db.query(models.Customer).all()

@customer_router.get("/{customer_id}", response_model=schemas.customers.customer.CustomerOut)
def get_customer(customer_id: int, db: Session = Depends(get_db)):
    customer = db.query(models.Customer).get(customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer

# Additional endpoints: update, delete, change password, etc. can be added similarly.
