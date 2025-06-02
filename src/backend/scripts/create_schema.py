from datetime import datetime
from logging import log
import sys
import os
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from passlib.context import CryptContext


# Setup path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.db.database import engine, SessionLocal
from app.models.customers import customer, customer_password, customer_role, customer_customer_role
from app.models.organization import department, office, section
from app.models.logging import log
from app.models.media import download, picture, picture_binary
from app.models.settings import settings
from app.models.security.permission_record import PermissionRecord
from app.models.organization.office import Office
from app.models.organization.department import Department
from app.models.organization.section import Section

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

        ## media related tables
        picture_binary.Base.metadata.create_all(bind=engine)
        download.Base.metadata.create_all(bind=engine)
        picture.Base.metadata.create_all(bind=engine)
        
        ## settings
        settings.Base.metadata.create_all(bind=engine)

        print("✅ Tables created successfully.")
    except SQLAlchemyError as e:
        print("❌ Failed to create tables.")
        print(f"Error: {e}")


# Seed permission
def seed_permissions():
    print("👤 Seeding permission Records ...")

    permissions = [
        {"system_name": "ManageCustomers", "name": "Manage Customers", "category": "Customer"},
        # Add more as needed
    ]
    
    db: Session = SessionLocal()
    
    try:
        for perm_data in permissions:
            existing = db.query(PermissionRecord).filter_by(system_name=perm_data["system_name"]).first()
            if not existing:
                perm = PermissionRecord(**perm_data)
                db.add(perm)
        db.commit()
        print("✅ Permissions Records has been added successfully.")
    except Exception as e:
        db.rollback()
        print(f"❌ Error seeding permissions: {e}")
    finally:
        db.close()


# Seed Roles
def seed_customer_roles():
    print("👤 Seeding Customer Roles ...")
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

        if not role2:
            role2 = customer_role.CustomerRole(
                name="Admin",
                system_name="admin",
                is_active=True,
                is_system_role=True
            )
            db.add(role2)

        if not role3:
            role3 = customer_role.CustomerRole(
                name="User",
                system_name="user",
                is_active=True,
                is_system_role=True
            )
            db.add(role3)        
        db.commit()
        print("✅ Default Customer Roles has been added successfully.")
    except SQLAlchemyError as e:
        print("❌ Failed to seed customer roles.")
        print(f"Error: {e}")
    finally:
        db.close()

# Default Customer 
def seed_super_admin_customer():
    print("👤 Seeding Super Admin customer...")
    db: Session = SessionLocal()
    try:
        role = db.query(customer_role.CustomerRole).filter_by(system_name="super-admin").first()

        if not role:
            print("👤 Adding Super Admin Roles first...")
            role = customer_role.CustomerRole(
                name="Super Admin",
                system_name="super-admin",
                is_active=True,
                is_system_role=True
            )
            db.add(role)
            db.commit()
            db.refresh(role)

        superadmin = db.query(customer.Customer).filter_by(sap_id="18707271").first()
        if not superadmin:
            superadmin = customer.Customer(
                email="superadmin@superadmin.com",
                sap_id="18707271",
                domain_id="nirupam",
                is_active=True,
                roles=[role]
            )
            db.add(superadmin)
            db.commit()

            hashed_password = pwd_context.hash("123456789")
            superadmin_pass = customer_password.CustomerPassword(
                customer_sap_id=superadmin.sap_id,
                password=hashed_password,
                password_format_id=1,
                password_salt=None
            )
            db.add(superadmin_pass)
            db.commit()

            print("✅ Super Admin created: 18707271 / 123456789")
        else:
            print("⚠️ Super Admin already exists.")
    except SQLAlchemyError as e:
        print("❌ Failed to seed Super Admin User.")
        print(f"Error: {e}")
    finally:
        db.close()

def seed_office_dept_section():
    print("👤 Seeding Office/Department/Sections...")
    db: Session = SessionLocal()
    try:
        ho = db.query(office.Office).filter_by(name="Head Office").first()

        if not ho:
            print("👤 Adding Office first...")
            ho = office.Office(
                name="Head Office",
                code="HO",
                created_by="system",
                created_on=datetime.utcnow()
            )
            db.add(ho)
            db.commit()

            print("✅ Office/Department.Section created")
        else:
            print("⚠️ Already exists.")
    except SQLAlchemyError as e:
        print("❌ Failed to seed office data.")
        print(f"Error: {e}")
    finally:
        db.close()


if __name__ == "__main__":
    create_tables()
    seed_permissions()
    seed_customer_roles()
    seed_super_admin_customer()
    seed_office_dept_section()
