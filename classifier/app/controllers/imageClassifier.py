from flask_restful import Resource, reqparse
from app.tf.classifier import FoodClassifier
from constants import Classifier
from flask import jsonify


class ImageClassifier(Resource):
    # def get(self, imageUrl):
    #     return {"result": result}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('imageUrl', type=str,
                            help="imageUrl must be provided")
        args = parser.parse_args()

        fc = FoodClassifier(Classifier.MODEL_PATH.value,
                            Classifier.LABEL_PATH.value)
        result = fc.classify(args.imageUrl, isUrl=True)
        return {
            "result": result
        }

    def put(self):
        return {"response": "hello put"}

    def delete(self):
        return {"response": "hello delete"}
