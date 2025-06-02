# app/models/customers/__init__.py

from .customer import Customer
from .customer_password import CustomerPassword
from .customer_role import CustomerRole
from .customer_customer_role import CustomerCustomerRole

from sqlalchemy.orm import relationship

# One-to-Many: Customer -> CustomerPassword
Customer.passwords = relationship(
    "CustomerPassword",
    back_populates="customer",
    ## cascade="all, delete-orphan"
)
CustomerPassword.customer = relationship(
    "Customer",
    back_populates="passwords"
)

# Many-to-Many: Customer <-> CustomerRole
Customer.roles = relationship(
    "CustomerRole",
    secondary="customer_customer_role",
    back_populates="customers"
)
CustomerRole.customers = relationship(
    "Customer",
    secondary="customer_customer_role",
    back_populates="roles"
)

# One-to-Many: Customer -> Office
Customer.office = relationship(
    "CustomerPassword",
    back_populates="customer",
    ## cascade="all, delete-orphan"
)
CustomerPassword.customer = relationship(
    "Customer",
    back_populates="passwords"
)

# One-to-One: Customer -> Department, Customer -> Section, Customer -> Office
Customer.office = relationship(
    "Office",
    foreign_keys=[Customer.office_id]
)

Customer.department = relationship(
    "Department",    
    foreign_keys=[Customer.department_id]
)

Customer.section = relationship(
    "Section",
    foreign_keys=[Customer.section_id]
)
