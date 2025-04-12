from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.db.models import User, Profile, SessionToken
from app.core.security import get_password_hash, create_token, verify_password
from app.schemas.auth import *


async def get_current_user(session: Session, token: str):
    user = session.query(SessionToken).filter_by(token=token).first().user
    return user


async def create_user(session: Session, data: UserCreateForm):
    user = session.query(User).filter(User.email == data.email).first()
    if not user:
        user = User(email=data.email, hashed_password=await get_password_hash(data.password))
        session.add(user)
        session.commit()
        session.refresh(user)
        session.add(Profile(user=user))
        session.commit()
        return user
    raise HTTPException(status_code=409, detail="Email already registered")


async def authenticate(email: str, password: str, session: Session):
    user = session.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    return user


async def add_token(session: Session, data: UserCreateForm):
    user = session.query(User).filter(User.email == data.email).first()
    token = session.query(SessionToken).filter(SessionToken.user_id == user.id).first()
    if not token:
        token = SessionToken(token=await create_token(data.__dict__), user=user)
        session.add(token)
    else:
        token.token = await create_token(data.__dict__)
    session.commit()
    session.refresh(token)
    return token.token


async def delete_token(session: Session, token: str):
    token = session.query(SessionToken).filter(SessionToken.token == token).first()
    if token:
        session.delete(token)
        session.commit()
        return True
    raise HTTPException(status_code=404, detail="This session is already closed")


async def post_profile(session: Session, token: str, profile: ProfileObject):
    profile = profile.__dict__
    user = session.query(SessionToken).filter(SessionToken.token == token).first().user
    profile_object = session.query(Profile).filter_by(user_id=user.id).first()
    a = []
    for k in profile.keys():
        if profile[k] is None:
            a.append(k)
    for k in a:
        profile.pop(k)
    for k in profile.keys():
        setattr(profile_object, k, profile[k])
    session.commit()
    session.refresh(profile_object)
    return profile_object
