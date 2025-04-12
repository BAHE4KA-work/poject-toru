from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.db.models import Place
from app.schemas.place import *


async def get_list(session: Session, lang: str = 'ru') -> list:
    l = session.query(Place).all()
    return [PlaceObjectOutput(**i.__dict__).__dict__ for i in l]


async def get_list_page(session: Session, data: PlaceFilterInput):
    l = session.query(Place)
    filters = PlaceFilterObject(**data.__dict__).__dict__
    a = []
    for k in filters.keys():
        if filters[k] is None:
            a.append(k)
    for k in a:
        filters.pop(k)
    try:
        l.filter_by(**filters)
    except:
        pass
    return l.limit(data.items_per_page).offset((data.page - 1) * data.items_per_page)

async def place_create(session: Session, place: PlaceObject):
    place = Place(**place.__dict__)
    session.add(place)
    session.commit()
    session.refresh(place)
    return place


async def place_delete(session: Session, place_id: int):
    try:
        place = session.query(Place).filter(Place.id == place_id).first()
        session.delete(place)
        session.commit()
    except:
        raise HTTPException(status_code=404, detail='Place doesn\'t exist')