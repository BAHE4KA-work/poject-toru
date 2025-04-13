from fastapi import FastAPI

from app.api import auth, booking, places, phrases, quests, pano, plan
from app.db.base import Base
from app.db.session import engine

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(booking.router)
app.include_router(places.router)
app.include_router(phrases.router)
app.include_router(quests.router)
app.include_router(pano.router)
app.include_router(plan.router)
