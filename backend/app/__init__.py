from flask import Flask
from flask_restful import Api
import os

from .controllers.imageClassifier import ImageClassifier


def _get_route(path):
    return '/api/{}'.format(path)


def create_app():
    app = Flask(__name__)

    api = Api(app)

    cwd = _basedir = os.path.abspath(os.path.dirname(__file__))

    UPLOAD_FOLDER = cwd[:cwd.rindex('/')]+'/uploads'
    MODEL_PATH = cwd+"/tf/retrained_graph.pb"
    LABEL_PATH = cwd+"/tf/retrained_labels.txt"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///static/db/test.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['MODEL_PATH'] = MODEL_PATH
    app.config['LABEL_PATH'] = LABEL_PATH

    # routes
    api.add_resource(ImageClassifier, '/api/classify')

    return app
