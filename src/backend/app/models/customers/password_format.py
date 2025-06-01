from enum import Enum

class PasswordFormat(int, Enum):
    Clear = 0
    Hashed = 1
    Encrypted = 2
