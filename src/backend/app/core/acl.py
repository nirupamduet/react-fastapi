from fastapi import Depends, HTTPException, status
from app.services.auth import get_current_customer
from sqlalchemy.orm import Session
from app.db.database import get_db

def require_roles(*roles):
    def role_checker(current_user = Depends(get_current_customer), db: Session = Depends(get_db)):
        user_roles = [r.system_name for r in current_user.roles]
        if not any(role in user_roles for role in roles):
            raise HTTPException(status_code=403, detail="Access forbidden: insufficient role")
        return current_user
    return role_checker
