from . import db
# db = app.db

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

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_all(cls):
        return cls.query.all()

    def to_dict(self):
        return {
            "email": self.email
        }