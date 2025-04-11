from database import get_session, Place
from local_types import PlaceObject, PlaceOutput, PlaceFilterObject, PlaceFilterInput, PlaceObjectOutput


async def get_list(lang: str = 'ru') -> list:
    session = get_session()
    l = session.query(Place).all()
    session.close()
    return [PlaceObjectOutput(**i.__dict__).__dict__ for i in l]


async def get_list_page(data: PlaceFilterInput):
    session = get_session()
    l = session.query(Place).all()
    filters = PlaceFilterObject(**data.__dict__).__dict__
    for k in filters.keys():
        if filters[k] is None:
            filters.pop(k)
    try:
        l.filter_by(**filters)
    except:
        pass
    session.close()
    return l.limit(data.items_per_page).offset((data.page - 1) * data.items_per_page)

async def create_place(place: PlaceObject) -> None:
    session = get_session()
    session.add(Place(**place.__dict__))
    session.commit()
    session.close()
    return None


async def delete_place(place_id: int):
    session = get_session()
    session.query(Place).filter(Place.id == place_id).first().delete()
    session.commit()
    session.close()
    return None
