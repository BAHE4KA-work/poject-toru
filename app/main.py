from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import auth, booking, places, phrases, quests, pano, plan
from app.db.base import Base
from app.db.session import engine

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Укажите конкретные домены, если необходимо
    allow_credentials=True,
    allow_methods=["*"],  # Позволяет все HTTP-методы
    allow_headers=["*"],  # Позволяет все заголовки
)

app.include_router(auth.router)
app.include_router(booking.router)
app.include_router(places.router)
app.include_router(phrases.router)
app.include_router(quests.router)
app.include_router(pano.router)
app.include_router(plan.router)

Base.metadata.create_all(bind=engine)