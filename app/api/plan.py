from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.core.config import oauth2_scheme
from app.services.plan_service import generate


router = APIRouter(prefix='/plan', tags=['Маршрут'])

@router.get('/{lang}')
async def get_plan(lang: str, token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)):
    return JSONResponse(content=await generate(token, lang, session), status_code=200)
