from database import get_session, Booking, SessionToken


async def order(place_id, token: str):
    session = get_session()
    user = session.query(SessionToken).filter_by(token=token).first().user
    place = session.query(Booking).filter_by(place_id=place_id).first()
    if place.is_ordered:
        return False
    place.is_ordered = True
    place.user_id = user.id
    session.commit()
    session.close()
    return True
