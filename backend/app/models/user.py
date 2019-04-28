from werkzeug.security import generate_password_hash
from . import db

class UserBuilder:
    def __init__(self, email, password):
        self.email = email
        self.password = password

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.password = password

    def to_dict(self):
        return {
            "email": self.email
        }

    def create(self):
        user_builder = UserBuilder(email=self.email, password=self.password)
        return User.create_user(user_builder)

    @classmethod
    def create_user(cls, user_builder):
        pw_hash = generate_password_hash(user_builder.password)
        user = cls(user_builder.email, pw_hash)
        # TODO: ADD encryption on password
        db.session.add(user)
        db.session.commit()
        return user

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_by_email(cls, _email):
        return cls.query.filter_by(email=_email).first()

    @classmethod
    def get_all(cls):
        return cls.query.all()