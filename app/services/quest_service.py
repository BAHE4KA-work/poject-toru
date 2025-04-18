from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.db.models import Quest, DoneQuest, SessionToken, Bonus, UserBonus


async def get_quest_list(lang: str, session: Session):
    return [{key: value for key, value in i.__dict__.items() if key != '_sa_instance_state'} for i in session.query(Quest).filter_by(lang=lang).all()]


async def get_done_quest_list(token: str, session: Session):
    user_id = session.query(SessionToken).filter_by(token=token).first().id
    return [{key: value for key, value in i.__dict__.items() if key != '_sa_instance_state'} for i in session.query(DoneQuest).filter_by(user_id=str(user_id))]


async def do_quest(token: str, session: Session, quest_id: int):
    user = session.query(SessionToken).filter_by(token=token).first().user
    user_id = user.id
    quest = session.query(Quest).filter_by(id=quest_id).first()
    done_quest = DoneQuest(user_id=user_id, quest=quest)
    user.coins = int(user.coins) + int(quest.value)
    session.add(done_quest)
    session.commit()
    session.refresh(done_quest)
    return {key: value for key, value in done_quest.__dict__.items() if key != '_sa_instance_state'}


async def get_bonus_list(session: Session, lang: str):
    return [{key: value for key, value in i.__dict__.items() if key != '_sa_instance_state'} for i in session.query(Bonus).filter_by(lang=lang).all()]


async def get_my_bonuses(session: Session, token: str):
    user_id = session.query(SessionToken).filter_by(token=token).first().user.id
    return [{key: value for key, value in i.__dict__.items() if key != '_sa_instance_state'} for i in session.query(UserBonus).filter_by(user_id=user_id).all()]


async def buy_bonus(session: Session, token: str, bonus_id: int):
    user = session.query(SessionToken).filter_by(token=token).first().user
    bonus = session.query(Bonus).filter_by(id=bonus_id).first()

    if bonus.id in [i['bonus_id'] for i in await get_my_bonuses(session, token)]:
        raise HTTPException(status_code=400, detail='Bonus is already bought')

    if user.coins < bonus.price:
        raise HTTPException(status_code=400, detail='You don\'t have enough points')

    user.coins = int(user.coins) - int(bonus.price)
    user_bonus = UserBonus(bonus=bonus, user_id=user.id)
    session.add(user_bonus)
    session.commit()
    session.refresh(user_bonus)
    return user_bonus
