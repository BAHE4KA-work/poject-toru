from datetime import timedelta
from typing import Annotated

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
from fastapi.security import OAuth2PasswordRequestForm

import user_manager as um
import place_manager as pm
import booking_manager as bm
from config import ACCESS_TOKEN_EXPIRE_MINUTES, oauth2_scheme
from database import create_databases, get_session, Phrase
from local_types import PlaceObject, PlaceFilterInput, UserCreateForm, ProfileObject

app = FastAPI()
create_databases()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/auth/register', tags=['Аккаунты'])
async def register(data: UserCreateForm):
    result = await um.create_user(data)
    if result:
        return {'code': 201, 'result': 'success'}
    raise HTTPException(status_code=400)


@app.post('/auth/login', tags=['Аккаунты'])
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user = await um.authenticate(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await um.create_token(data={"sub": user.email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}


@app.post('/auth/logout', tags=['Аккаунты'])
async def logout(token: str = Depends(oauth2_scheme)):
    return await um.delete_token(token)


@app.post('/profile/post_form', tags=['Аккаунты'])
async def profile_post(profile: ProfileObject, token: str = Depends(oauth2_scheme)):
    return await um.profile_post(token, profile)


@app.post('/places/', tags=['Места'])
async def get_places_list(lang: str = 'ru'):
    return JSONResponse(await pm.get_list(lang), status_code=200)


@app.post('/places/pages/', tags=['Места'])
async def get_place_list(data: PlaceFilterInput):
    return JSONResponse(await pm.get_list_page(data), status_code=200)


@app.post('/places/create', tags=['Места'])
async def create_place(place: PlaceObject):
    await pm.create_place(place)
    return JSONResponse(None, status_code=201)


@app.delete('/places/delete/{place_id}', tags=['Места'])
async def delete_place(place_id: int):
    await pm.delete_place(place_id)
    return JSONResponse('success', status_code=200)


@app.post('/booking/do/{place_id}', tags=['Бронирование'])
async def do_booking(place_id: int, token: str = Depends(oauth2_scheme)):
    await bm.order(place_id, token)
    return JSONResponse('success', status_code=200)


@app.get('/phrases/{lang}', tags=['Фразы'])
async def get_phrase_list(lang: str):
    session = get_session()
    data = session.query(Phrase).all()
    session.close()
    return JSONResponse([i.__dict__ for i in data], status_code=200)


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
