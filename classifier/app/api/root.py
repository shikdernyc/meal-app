from flask_restful import Resource


class Root(Resource):
    def get(self):
        return {
            "response": "Hello, World"
        }