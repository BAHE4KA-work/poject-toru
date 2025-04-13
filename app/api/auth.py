from typing import Annotated
from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.config import oauth2_scheme
from app.db.session import get_db
from app.services.auth_service import create_user, authenticate, delete_token, post_profile, add_token, get_my_user
from app.schemas.auth import UserCreateForm, ProfileObject


router = APIRouter(prefix="/auth", tags=["Аккаунты"])

@router.post('/register')
async def register(data: UserCreateForm, session: Session = Depends(get_db)):
    result = await create_user(session, data)
    if result:
        return {'code': 201, 'result': 'success'}
    raise HTTPException(status_code=400)


@router.post('/login')
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: Session = Depends(get_db)):
    user = await authenticate(form_data.username, form_data.password, session)
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    access_token = await add_token(session, data=UserCreateForm(email=form_data.username, password=form_data.password))
    return {"access_token": access_token, "token_type": "bearer"}


@router.post('/logout')
async def logout(session: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    return await delete_token(session, token)


@router.get('/me')
async def get_me(token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)):
    return await get_my_user(token, session)


@router.post('/profile/post_form')
async def profile_post(profile: ProfileObject, session: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    return await post_profile(session, token, profile)
