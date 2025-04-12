from typing import Optional
from pydantic import BaseModel as Base


class ProfileObject(Base):
    age: Optional[int] = None
    kids: Optional[str] = None
    smoking: Optional[bool] = None
    drinks: Optional[bool] = None
    food_type: Optional[str] = None
    food_preferences: Optional[str] = None
    activity: Optional[str] = None
    health: Optional[str] = None
    with_pets: Optional[str] = None
    lang: Optional[str] = None
    money: Optional[str] = None
    crowd: Optional[bool] = None
    photo: Optional[bool] = None
    extreme: Optional[bool] = None
    historical: Optional[bool] = None
    hobby: Optional[str] = None
    ecology: Optional[bool] = None
    science: Optional[bool] = None
    religious: Optional[str] = None


class UserCreateForm(Base):
    email: str
    password: str
