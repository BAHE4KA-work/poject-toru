from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.db.models import SessionToken, Booking


async def order(place_id, session: Session, token: str):
    user = session.query(SessionToken).filter_by(token=token).first().user
    place = session.query(Booking).filter_by(place_id=place_id).first()
    if place.is_ordered:
        raise HTTPException(status_code=409, detail="This place is already ordered")
    place.is_ordered = True
    place.user_id = user.id
    session.commit()
    session.refresh(place)
    return place
