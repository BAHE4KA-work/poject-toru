from typing import Optional
from pydantic import BaseModel as Base


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