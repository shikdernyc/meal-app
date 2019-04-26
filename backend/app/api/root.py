from flask_restful import Resource


class RootRes(Resource):
    def get(self):
        return {
            "response": "Hello, World"
        }
