from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.db.models import Phrase


router = APIRouter(prefix="/phrases", tags=["Фразы"])

@router.get('/{lang}')
async def get_phrase_list(lang: str, session: Session = Depends(get_db)):
    data = session.query(Phrase).filter_by(lang=lang).all()
    return JSONResponse([{key: value for key, value in i.__dict__.items() if key != '_sa_instance_state'} for i in data], status_code=200)
