# app/models/customers/__init__.py


from .customer import Customer
from .customer_password import CustomerPassword
from .customer_role import CustomerRole
from app.models.organization.office import Office
from app.models.organization.department import Department
from app.models.organization.section import Section

from sqlalchemy.orm import relationship

# One-to-Many: Customer -> CustomerPassword
Customer.passwords = relationship(
    "CustomerPassword",
    back_populates="customer",
    cascade="all, delete-orphan"
)
CustomerPassword.customer = relationship(
    "Customer",
    back_populates="passwords"
)

# Many-to-Many: Customer <-> CustomerRole
# Customer.roles = relationship(
#     "CustomerRole",
#     ## secondary="customer_customer_role",
#     ## back_populates="customers"
# )
# CustomerRole.customers = relationship(
#     "Customer",
#     secondary="customer_customer_role",
#     back_populates="roles"
# )

# One-to-Many: Customer -> Office
# Customer.office = relationship(
#     "Office",
#     ## back_populates="customer",
#     ## cascade="all, delete-orphan"
# )
# Office.customer = relationship(
#     "Customer",
#     back_populates="passwords"
# )
