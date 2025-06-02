from .department import Department
from .office import Office
from .section import Section
from sqlalchemy.orm import relationship

# One-to-Many: Office -> Departments
Office.departments = relationship(
    "Department",
    back_populates="office",
    foreign_keys=[Department.office_id]
)

Department.office = relationship(
    "Office",
    back_populates="departments",
    foreign_keys=[Department.office_id]
)

# One-to-Many: Department -> Sections
Department.sections = relationship(
    "Section",
    back_populates="department",
    foreign_keys=[Section.department_id]
)

Section.department = relationship(
    "Department",
    back_populates="sections",
    foreign_keys=[Section.department_id]
)
