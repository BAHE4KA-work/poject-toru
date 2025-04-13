from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.quest_service import get_quest_list, get_done_quest_list, do_quest, buy_bonus, get_bonus_list, get_my_bonuses
from app.core.config import oauth2_scheme


router = APIRouter(prefix="/quests", tags=["Задания"])

@router.get('/get_list/{lang}')
async def get_list(lang: str, session: Session = Depends(get_db)):
    return JSONResponse(await get_quest_list(lang, session), status_code=200)


@router.get('/get_list_done')
async def get_list_done(token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)):
    return JSONResponse(await get_done_quest_list(token, session), status_code=200)


@router.post('/do_quest/{quest_id}')
async def quest_do(quest_id: int, token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)):
    return JSONResponse(await do_quest(token, session, quest_id), status_code=200)


@router.get('/get_bonus_list/{lang}')
async def get_list_bonus(lang: str = 'ru', session: Session = Depends(get_db)):
    return JSONResponse(await get_bonus_list(session, lang), status_code=200)


@router.get('/get_my_bonus_list')
async def get_my_bonus_list(token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)):
    return JSONResponse(await get_my_bonuses(session, token), status_code=200)


@router.post('/buy_bonus/{bonus_id}')
async def bonus_buy(bonus_id: int, session: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    return JSONResponse(await buy_bonus(session=session, token=token, bonus_id=bonus_id), status_code=200)
