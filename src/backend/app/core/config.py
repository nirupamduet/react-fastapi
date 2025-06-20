# app/core/config.py
from pathlib import Path
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict

# Resolve absolute path to backend/.env no matter where script is run from
env_path = Path(__file__).resolve().parents[2] / ".env"

class Settings(BaseSettings):
    PROJECT_NAME: str
    DB_URL: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    ALLOWED_ORIGINS: List[str] 

    class Config:
        env_file = ".env"

settings = Settings()
