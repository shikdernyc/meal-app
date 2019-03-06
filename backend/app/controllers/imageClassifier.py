from flask_restful import Resource, reqparse
from app.tf.classifier import FoodClassifier
from constants import Classifier
from flask import jsonify


class ImageClassifier(Resource):
    # def get(self, imageUrl):
    #     return {"result": result}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('location', type=str,
                            help="imageUrl must be provided")
        parser.add_argument('isUrl', type=bool,
                            help="isUrl must be provided")
        args = parser.parse_args()

        fc = FoodClassifier(Classifier.MODEL_PATH.value,
                            Classifier.LABEL_PATH.value)
        if(not args.isUrl):
            # TOOD: Make location an environment variable
            location = "/usr/src/app/uploads/"+args.location
        else:
            location = args.location
        print(location)
        result = fc.classify(location, isUrl=args.isUrl)
        print(result)
        return {
            "result": result
        }

    def put(self):
        return {"response": "hello put"}

    def delete(self):
        return {"response": "hello delete"}
