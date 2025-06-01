import sys
import os
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

# Setup path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.db.database import engine, SessionLocal
from app.models.customers import customer, customer_password, customer_role, customer_customer_role
from passlib.context import CryptContext

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_tables():
    try:
        print("⏳ Creating tables...")
        customer.Base.metadata.create_all(bind=engine)
        customer_password.Base.metadata.create_all(bind=engine)
        customer_role.Base.metadata.create_all(bind=engine)
        customer_customer_role.Base.metadata.create_all(bind=engine)
        print("✅ Tables created successfully.")
    except SQLAlchemyError as e:
        print("❌ Failed to create tables.")
        print(f"Error: {e}")

def seed_demo_customer():
    print("👤 Seeding demo customer...")
    db: Session = SessionLocal()
    try:
        # Check if demo role exists
        role = db.query(customer_role.CustomerRole).filter_by(system_name="Registered").first()
        if not role:
            role = customer_role.CustomerRole(
                name="Registered",
                system_name="Registered",
                is_active=True,
                is_system_role=True
            )
            db.add(role)
            db.commit()
            db.refresh(role)

        # Check if demo customer exists
        existing = db.query(customer.Customer).filter_by(email="demo@example.com").first()
        if not existing:
            demo = customer.Customer(
                email="demo@example.com",
                username="demouser",
                is_active=True,
                roles=[role]
            )
            db.add(demo)
            db.commit()
            db.refresh(demo)

            hashed_password = pwd_context.hash("Demo@123")
            demo_pw = customer_password.CustomerPassword(
                customer_id=demo.id,
                password=hashed_password,
                password_format_id=1,  # Hashed
                password_salt=None
            )
            db.add(demo_pw)
            db.commit()

            print("✅ Demo customer created: demo@example.com / Demo@123")
        else:
            print("⚠️ Demo customer already exists.")
    except SQLAlchemyError as e:
        print("❌ Failed to seed demo customer.")
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_tables()
    seed_demo_customer()
