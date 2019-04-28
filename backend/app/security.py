from werkzeug.security import safe_str_cmp, check_password_hash
from .models.user import User

def authenticate(email, password):
    user = User.find_by_email(email)
    if user and check_password_hash(user.password, password):
        return user

def identity(payload):
    user_id = payload['identity']
    return User.find_by_id(user_id)
