from flask import Blueprint
from flask_restful import Api
from .imageClassifier import ImageClassifier

api_bp = Blueprint('api', __name__, url_prefix='/api')
api = Api(api_bp)

api.add_resource(ImageClassifier, '/classify')
