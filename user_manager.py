from datetime import datetime, timedelta
from database import get_session, User, Profile, SessionToken
from config import pwd_context, SECRET_KEY, ALGORITHM
from typing import Optional
from jose import jwt
from local_types import UserCreateForm, ProfileObject


async def create_user(data: UserCreateForm):
    session = get_session()
    user = session.query(User).filter(User.email == data.email).first()
    if not user:
        user = User(email=data.email, hashed_password=pwd_context.hash(data.password))
        session.add(user)
        session.commit()
        session.refresh(user)
        session.add(Profile(user=user))
        session.commit()
        return True
    session.close()

async def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


async def authenticate(email: str, password: str):
    session = get_session()
    user = session.query(User).filter(User.email == email).first()
    session.close()
    if not user or not verify_password(password, user.hashed_password):
        return None
    else:
        return user


async def create_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    session = get_session()
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now() + expires_delta
    else:
        expire = datetime.now() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    user = session.query(User).filter(User.email == data['sub']).first()
    token = session.query(SessionToken).filter(SessionToken.user_id == user.id).first()
    if not token:
        session.add(SessionToken(token=encoded_jwt, user=user))
    else:
        token.token = encoded_jwt
    session.commit()
    session.close()
    return encoded_jwt


async def delete_token(token: str):
    session = get_session()
    token = session.query(SessionToken).filter(SessionToken.token == token).first()
    if token:
        session.delete(token)
        session.commit()
    session.close()
    return 'Token deleted'

async def profile_post(token: str, profile: ProfileObject):
    profile = profile.__dict__
    session = get_session()
    user = session.query(SessionToken).filter_by(token=token).first()
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
    session.close()
    return profile_object
