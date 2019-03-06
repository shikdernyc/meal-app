from flask_restful import Resource, reqparse
from app.tf.classifier import FoodClassifier
from flask import jsonify, current_app
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
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
        fc = FoodClassifier(current_app.config['MODEL_PATH'],
                            current_app.config['LABEL_PATH'])
        file = args.image
        content = file.stream.read()
        filetype = get_file_type(file.filename)
        result = fc.classify(content, filetype, is_content=True)
        return {"result": result}
