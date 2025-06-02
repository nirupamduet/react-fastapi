# app/services/settings_service.py

from sqlalchemy.orm import Session
from app.models.settings import Setting

class SettingService:
    def __init__(self, db: Session):
        self.db = db
        self._cache = {}

    def get_setting(self, name: str, default=None) -> str:
        if name in self._cache:
            return self._cache[name]

        setting = self.db.query(Setting).filter_by(name=name).first()
        if setting:
            self._cache[name] = setting.value
            return setting.value
        return default

    def set_setting(self, name: str, value: str):
        setting = self.db.query(Setting).filter_by(name=name).first()
        if setting:
            setting.value = value
        else:
            setting = Setting(name=name, value=value)
            self.db.add(setting)

        self.db.commit()
        self._cache[name] = value

    def get_all_settings(self) -> dict:
        settings = self.db.query(Setting).all()
        return {s.name: s.value for s in settings}
