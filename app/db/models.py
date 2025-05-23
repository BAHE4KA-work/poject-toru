from typing import Type
from sqlalchemy import Integer, String, ForeignKey, Boolean, Float
from sqlalchemy.orm import relationship, mapped_column, Mapped

from app.db.base import Base


class SessionToken(Base):
    __allow_unmapped__ = True
    __tablename__ = 'sessions'
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))

    token: Mapped[str] = mapped_column(String)

    user: Type['User'] = relationship('User', back_populates='token')


class User(Base):
    __allow_unmapped__ = True
    __tablename__ = 'users'
    id: Mapped[int] = mapped_column(primary_key=True)

    email: Mapped[str] = mapped_column(String)
    hashed_password: Mapped[str] = mapped_column(String)
    coins: Mapped[int] = mapped_column(Integer, default=0)

    token: Type['SessionToken'] = relationship('SessionToken', back_populates='user')
    profile: Type['Profile'] = relationship('Profile', back_populates='user')


class Profile(Base):
    __allow_unmapped__ = True
    __tablename__ = 'profiles'
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))

    age: int = mapped_column(Integer, nullable=True)
    kids: str = mapped_column(String, nullable=True)
    smoking: bool = mapped_column(Boolean, nullable=True)
    drinks: bool = mapped_column(Boolean, nullable=True)
    food_type: str = mapped_column(String, nullable=True)
    food_preferences: str = mapped_column(String, nullable=True)
    activity: str = mapped_column(String, nullable=True)
    health: str = mapped_column(String, nullable=True)
    with_pets: str = mapped_column(String, nullable=True)
    lang: str = mapped_column(String, nullable=True)
    money: str = mapped_column(String, nullable=True)
    crowd: bool = mapped_column(Boolean, nullable=True)
    photo: bool = mapped_column(Boolean, nullable=True)
    extreme: bool = mapped_column(Boolean, nullable=True)
    historical: bool = mapped_column(Boolean, nullable=True)
    hobby: str = mapped_column(String, nullable=True)
    ecology: bool = mapped_column(Boolean, nullable=True)
    science: bool = mapped_column(Boolean, nullable=True)
    religious: str = mapped_column(String, nullable=True)

    user: Type['User'] = relationship('User', back_populates='profile')


class Bonus(Base):
    __allow_unmapped__ = True
    __tablename__ = 'bonuses'
    id: Mapped[int] = mapped_column(primary_key=True)

    name: Mapped[str] = mapped_column(String, nullable=True, default='')
    lang: Mapped[str] = mapped_column(String, nullable=True, default='ru')
    price: Mapped[int] = mapped_column(Integer, nullable=True, default=None)

    user_bonus: Type['UserBonus'] = relationship('UserBonus', back_populates='bonus')


class UserBonus(Base):
    __allow_unmapped__ = True
    __tablename__ = 'user_bonuses'
    id: Mapped[int] = mapped_column(primary_key=True)
    bonus_id: Mapped[int] = mapped_column(ForeignKey('bonuses.id'))

    user_id: Mapped[int] = mapped_column(Integer)

    bonus: Type['Bonus'] = relationship('Bonus', back_populates='user_bonus')


class Place(Base):
    __allow_unmapped__ = True
    __tablename__ = 'places'
    id: Mapped[int] = mapped_column(primary_key=True)

    lang: Mapped[str] = mapped_column(String, nullable=True, default='ru')

    lat: Mapped[float] = mapped_column(Float, nullable=True, default=0.0)
    long: Mapped[float] = mapped_column(Float, nullable=True, default=0.0)

    category: Mapped[str] = mapped_column(String, nullable=True, default=None)
    label: Mapped[str] = mapped_column(String)
    short_description: Mapped[str] = mapped_column(String, nullable=True, default='')
    address: Mapped[str] = mapped_column(String, nullable=True, default='')
    time: Mapped[str] = mapped_column(String, nullable=True, default='')
    long_description: Mapped[str] = mapped_column(String, nullable=True, default='')
    price: Mapped[str] = mapped_column(String, nullable=True, default='')
    tip: Mapped[str] = mapped_column(String, nullable=True, default='')

    booking: Mapped[bool] = mapped_column(Boolean, nullable=True, default=None)
    kid_friendly: Mapped[bool] = mapped_column(Boolean, nullable=True, default=None)
    with_pets: Mapped[bool] = mapped_column(Boolean, nullable=True, default=None)
    food_type: Mapped[str] = mapped_column(String, nullable=True, default=None)

    img_url: Mapped[str] = mapped_column(String, nullable=True, default=None)

    mark: Mapped[float] = mapped_column(Float, nullable=True, default=0.0)
    internet_mark: Mapped[int] = mapped_column(Integer, nullable=True, default=0.0)

    quests: Type['Quest'] = relationship('Quest', back_populates='place')
    bookings: Type['Booking'] = relationship('Booking', back_populates='place')


class Booking(Base):
    __allow_unmapped__ = True
    __tablename__ = 'bookings'
    id: Mapped[int] = mapped_column(primary_key=True)
    place_id: Mapped[int] = mapped_column(ForeignKey('places.id'))

    is_ordered: Mapped[bool] = mapped_column(Boolean, nullable=True, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=True, default=None)

    place: Type['Place'] = relationship('Place', back_populates='bookings')


class Quest(Base):
    __allow_unmapped__ = True
    __tablename__ = 'quests'
    id: Mapped[int] = mapped_column(primary_key=True)
    place_id: Mapped[int] = mapped_column(ForeignKey('places.id'))

    lang: Mapped[str] = mapped_column(String, nullable=True, default='ru')

    value: Mapped[int] = mapped_column(Integer)
    goal: Mapped[str] = mapped_column(String, nullable=True, default='')

    place: Type['Place'] = relationship('Place', back_populates='quests')
    done: Type['DoneQuest'] = relationship('DoneQuest', back_populates='quest')


class DoneQuest(Base):
    __allow_unmapped__ = True
    __tablename__ = 'done_quests'
    id: Mapped[int] = mapped_column(primary_key=True)
    quest_id: Mapped[int] = mapped_column(ForeignKey('quests.id'))

    user_id: Mapped[int] = mapped_column(Integer, nullable=True, default=None)

    quest: Type['Quest'] = relationship('Quest', back_populates='done')


class Phrase(Base):
    __tablename__ = 'phrases'
    id: Mapped[int] = mapped_column(primary_key=True)

    lang: Mapped[str] = mapped_column(String, nullable=True, default='en')

    native: Mapped[str] = mapped_column(String)
    translit: Mapped[str] = mapped_column(String)
    russian: Mapped[str] = mapped_column(String)
