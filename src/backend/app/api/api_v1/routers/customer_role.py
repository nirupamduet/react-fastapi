from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app import schemas, models
from app.api.deps import get_db

customer_role_router = APIRouter(prefix="/roles", tags=["roles"])

@customer_role_router.post("/", response_model=schemas.customers.customer_role.CustomerRoleOut, status_code=status.HTTP_201_CREATED)
def create_role(role_in: schemas.customers.customer_role.CustomerRoleCreate, db: Session = Depends(get_db)):
    # Check for duplicate name
    existing = db.query(models.CustomerRole).filter(models.CustomerRole.name == role_in.name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Role name already exists")
    role = models.CustomerRole(**role_in.dict())
    db.add(role)
    db.commit()
    db.refresh(role)
    return role

@customer_role_router.get("/", response_model=List[schemas.customers.customer_role.CustomerRoleOut])
def list_roles(db: Session = Depends(get_db)):
    return db.query(models.CustomerRole).all()

@customer_role_router.get("/{role_id}", response_model=schemas.customers.customer_role.CustomerRoleOut)
def get_role(role_id: int, db: Session = Depends(get_db)):
    role = db.query(models.CustomerRole).get(role_id)
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")
    return role

@customer_role_router.put("/{role_id}", response_model=schemas.customers.customer_role.CustomerRoleOut)
def update_role(role_id: int, role_in: schemas.customers.customer_role.CustomerRoleCreate, db: Session = Depends(get_db)):
    role = db.query(models.CustomerRole).get(role_id)
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")
    for key, value in role_in.dict().items():
        setattr(role, key, value)
    db.commit()
    db.refresh(role)
    return role

@customer_role_router.delete("/{role_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_role(role_id: int, db: Session = Depends(get_db)):
    role = db.query(models.CustomerRole).get(role_id)
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")
    db.delete(role)
    db.commit()
    return None
