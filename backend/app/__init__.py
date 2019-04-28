from flask import Flask, Blueprint
import os
from config import config
from flask_jwt import JWT
from .api import api_bp
from .models import db
from .security import authenticate, identity

def create_app(config_type):
    app = Flask(__name__)
    app.config.from_object(config[config_type])

    db.init_app(app)
    @app.before_first_request
    def create_tables():
        db.create_all()

    jwt = JWT(app, authenticate, identity)

    app.register_blueprint(api_bp)


    return app
