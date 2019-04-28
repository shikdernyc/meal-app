from flask import Blueprint
from flask_restful import Api
from flask_cors import CORS

from .image_classifier import ImageClassifierRes
from .root import RootRes
from .user import UserRes

api_bp = Blueprint('api', __name__, url_prefix='/api')
CORS(api_bp)
api = Api(api_bp)

api.add_resource(ImageClassifierRes, '/classify')
api.add_resource(UserRes, '/signup')
api.add_resource(RootRes, '/')