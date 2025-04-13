import json
import re
import requests
from sqlalchemy.orm import Session

from app.schemas.plan import PlaceAI, ProfileObject
from app.db.models import Place, SessionToken


async def get_initial_messages(places: list[PlaceAI], lang: str):
    messages = [
        {
            "role": "system",
            "content": (
                f"Answer exclusively in {'Russian' if lang == 'ru' else 'English'}, preserving the original spelling of names (do not translate them). "
                f"Based on the user's questionnaire data, provide tourism recommendations for the Krasnodar Krai, selecting options exclusively from the provided list. "
                f"Consider locations and addresses; if an address cannot be determined, ignore this requirement. "
                f"Formulate your responses concisely, with one sentence per item. Use the following template:\n"
                f"1. Досуг\n2. Питание\n3. Жильё\n"
                f"For each item, return only one company id (a single number)."
            )
        },
        {
            "role": "system",
            "content": f"Вот список всех мест: {places}"
        }
    ]
    return messages


async def is_valid(result_dict):
    expected_keys = ["dosug", "pitanye", "zhilyo"]
    pattern = re.compile(r"^\d+$")
    for key in expected_keys:
        value = result_dict.get(key, "").strip()
        if not value or not pattern.match(value):
            return False
    return True


async def send_request(conversation, headers):
    json_data = {
        "model": "mathstral-7b-v0.1",
        "messages": conversation,
        "response_format": {
            "type": "json_schema",
            "json_schema": {
                "name": "travel_recommendations",
                "schema": {
                    "type": "object",
                    "properties": {
                        "dosug": {
                            "type": "string",
                            "description": "Краткая рекомендация по досугу"
                        },
                        "pitanye": {
                            "type": "string",
                            "description": "Краткая рекомендация по питанию"
                        },
                        "zhilyo": {
                            "type": "string",
                            "description": "Краткая рекомендация по жилью"
                        },
                    },
                    "required": ["dosug", "pitanye", "zhilyo"]
                }
            }
        },
        "temperature": 0.7,
        "max_tokens": 128,
        "stream": False
    }
    try:
        response = requests.post('http://localhost:5242/v1/chat/completions', headers=headers, json=json_data)
        response_content = response.content.decode()
        result_str = json.loads(response_content)["choices"][0]["message"]["content"]
        if result_str.strip().startswith("{"):
            result_json = json.loads(result_str)
        else:
            result_json = {}
        return result_json
    except Exception:
        return {}


async def chat_loop(initial_messages, user_content, headers, max_attempts=5):
    current_user_message = {"role": "user", "content": user_content}
    for _ in range(max_attempts):
        conversation = initial_messages + [current_user_message]
        result = await send_request(conversation, headers)
        if await is_valid(result):
            return result
    return {}


async def generate(token: str, lang: str, session: Session):
    headers = {'Content-Type': 'application/json'}
    person = ProfileObject(**session.query(SessionToken).filter_by(token=token).first().user.profile.__dict__).__dict__
    places = []
    for p in session.query(Place).filter_by(lang=lang).all():
        places.append(PlaceAI(**p.__dict__))
    initial_msgs = await get_initial_messages(places, lang)
    user_data_str = f"{person}"
    result = await chat_loop(initial_msgs, user_data_str, headers, max_attempts=5)
    r = []
    for i in result.values():
        try:
            r.append({key: var for key, var in session.query(Place).filter_by(id=int(i)).first().__dict__.items() if key != '_sa_instance_state'})
        except:
            pass
    return r
