from flask_restful import Resource, reqparse
from app.handlers.classifier import FoodClassifier
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
from constants import MODEL_PATH, LABEL_PATH
import os


def get_file_type(file_name):
    return file_name[file_name.rindex('.')+1:]


class ImageClassifier(Resource):
    def post(self):
        # ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
        parser = reqparse.RequestParser()
        parser.add_argument('image', type=FileStorage, location='files',
                            help="location must be provided")
        args = parser.parse_args()
        fc = FoodClassifier(MODEL_PATH,
                            LABEL_PATH)
        file = args.image
        content = file.stream.read()
        filetype = get_file_type(file.filename)
        result = fc.classify(content, filetype, is_content=True)
        return {"result": result}
