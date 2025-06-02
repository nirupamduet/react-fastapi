# app/db/base_class.py

from sqlalchemy.orm import as_declarative, declared_attr

@as_declarative()
class Base:
    id: any
    __name__: str

    # Auto-generate table name from class name
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()
