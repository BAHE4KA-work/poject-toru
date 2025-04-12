from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.core.config import oauth2_scheme
from app.services.booking_service import order


router = APIRouter(prefix="/booking", tags=["Бронирование"])


@router.post('/do/{place_id}')
async def do_booking(place_id: int, session: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    await order(place_id, session, token)
    return JSONResponse('success', status_code=200)
