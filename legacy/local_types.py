from typing import Optional
from pydantic import BaseModel


class Base(BaseModel):
    pass


class PlaceObject(Base):
    lat: float
    long: float

    category: str
    label: str
    short_description: str
    address: str
    time: str
    long_description: str
    price: str
    tip: str

    booking: bool
    kid_friendly: bool
    with_pets: bool
    food_type: str

    img_url: str

    mark: float
    internet_mark: int


class PlaceObjectOutput(Base):
    id: int

    lat: float
    long: float

    category: str
    label: str
    short_description: str
    address: str
    time: str
    long_description: str
    price: str
    tip: str

    img_url: str


class PlaceFilterObject(Base):
    kid_friendly: Optional[bool] = None
    internet_mark: Optional[bool] = None
    mark: Optional[bool] = None
    with_pets: Optional[bool] = None
    category: Optional[str] = None
    food_type: Optional[str] = None


class PlaceFilterInput(PlaceFilterObject):
    lang: Optional[str] = 'ru'
    page: Optional[int] = 1
    items_per_page: Optional[int] = 10


class PlaceOutput(PlaceObject):
    id: int


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
