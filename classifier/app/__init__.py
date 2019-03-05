from flask import Flask
from flask_restful import Api
import os

from .controllers.imageClassifier import ImageClassifier


def _get_route(path):
    return '/api/{}'.format(path)


def create_app():
    app = Flask(__name__)

    api = Api(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///static/db/test.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

    # routes
    api.add_resource(ImageClassifier, '/api/classify')

    return app