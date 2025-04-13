from pydantic import BaseModel as Base

class PanoInput(Base):
    lat: float
    lng: float
    heading: float = 165
    pitch: float = 0
    zoom: int = 1
