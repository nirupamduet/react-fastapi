from logging import log
import sys
import os
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

# Setup path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.db.database import engine, SessionLocal
from app.models.customers import customer, customer_password, customer_role, customer_customer_role
from app.models.organization import department, office, section
from app.models.logging import log

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
        log.Base.metadata.create_all(bind=engine)
        office.Base.metadata.create_all(bind=engine)
        department.Base.metadata.create_all(bind=engine)
        section.Base.metadata.create_all(bind=engine)

        print("✅ Tables created successfully.")
    except SQLAlchemyError as e:
        print("❌ Failed to create tables.")
        print(f"Error: {e}")

def seed_demo_customer():
    print("👤 Seeding demo customer...")
    db: Session = SessionLocal()
    try:
        # Check if demo role exists
        role1 = db.query(customer_role.CustomerRole).filter_by(system_name="super-admin").first()
        role2 = db.query(customer_role.CustomerRole).filter_by(system_name="admin").first()
        role3 = db.query(customer_role.CustomerRole).filter_by(system_name="user").first()

        if not role1:
            role1 = customer_role.CustomerRole(
                name="Super Admin",
                system_name="super-admin",
                is_active=True,
                is_system_role=True
            )
            db.add(role1)
            db.commit()
            db.refresh(role1)

        if not role2:
            role2 = customer_role.CustomerRole(
                name="Admin",
                system_name="admin",
                is_active=True,
                is_system_role=True
            )
            db.add(role2)
            db.commit()
            db.refresh(role2)

        if not role3:
            role3 = customer_role.CustomerRole(
                name="User",
                system_name="user",
                is_active=True,
                is_system_role=True
            )
            db.add(role3)
            db.commit()
            db.refresh(role3)

        # Check if demo customer exists
        existing = db.query(customer.Customer).filter_by(sap_id="18707271").first()
        if not existing:
            demo = customer.Customer(
                email="admin@admin.com",
                sap_id="18707271",
                domain_id="nirupam",
                is_active=True,
                roles=[role1]
            )
            db.add(demo)
            db.commit()
            db.refresh(demo)

            hashed_password = pwd_context.hash("123456789")
            demo_pw = customer_password.CustomerPassword(
                customer_sap_id=demo.sap_id,
                password=hashed_password,
                password_format_id=1,  # Hashed
                password_salt=None
            )
            db.add(demo_pw)
            db.commit()

            print("✅ Super Admin created: 18707271 / 123456789")
        else:
            print("⚠️ Super Admin already exists.")
    except SQLAlchemyError as e:
        print("❌ Failed to seed Super Admin User.")
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_tables()
    seed_demo_customer()
