from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext

DATABASE_URL = "sqlite:///./app/data/database.db"

GOOGLE_API_KEY = 'AIzaSyANYtsM-aZ4zI6cJsiaqUtZguw79KnclAQ'

SECRET_KEY = "aosidj342390AOKPLSDopk2390$@()2ji1[app-0"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
