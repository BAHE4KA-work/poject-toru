from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.place_service import get_list, get_list_page, place_create, place_delete
from app.schemas.place import PlaceObject, PlaceFilterInput


router = APIRouter(prefix="/places", tags=["Места"])

@router.get('/{lang}')
async def get_places_list(session: Session = Depends(get_db), lang: str = 'ru'):
    return JSONResponse(await get_list(session, lang), status_code=200)


@router.post('/pages/{lang}')
async def get_place_filtered_list(lang: str, data: PlaceFilterInput, session: Session = Depends(get_db)):
    return JSONResponse([i.__dict__ for i in await get_list_page(session, data, lang)], status_code=200)


@router.post('/create')
async def create_place(place: PlaceObject, session: Session = Depends(get_db)):
    await place_create(session, place)
    return JSONResponse('success', status_code=201)


@router.delete('/delete/{place_id}')
async def delete_place(place_id: int, session: Session = Depends(get_db)):
    await place_delete(session, place_id)
    return JSONResponse('success', status_code=200)
