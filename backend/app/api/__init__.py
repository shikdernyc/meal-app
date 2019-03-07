from flask import Blueprint
from flask_restful import Api
from .imageClassifier import ImageClassifier
from .root import Root

api_bp = Blueprint('api', __name__, url_prefix='/api')
api = Api(api_bp)

api.add_resource(ImageClassifier, '/classify')
api.add_resource(Root, '/')
