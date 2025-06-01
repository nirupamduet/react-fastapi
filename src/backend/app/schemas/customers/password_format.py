from enum import IntEnum

class PasswordFormat(int, IntEnum):
    Clear = 0
    Hashed = 1
    Encrypted = 2
