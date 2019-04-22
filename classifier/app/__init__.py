from flask import Flask, Blueprint
import os
from config import config
# from .api.imageClassifier import ImageClassifier
from .api import api_bp


def create_app(config_type):
    app = Flask(__name__)
    app.config.from_object(config[config_type])

    app.register_blueprint(api_bp)

    return app
