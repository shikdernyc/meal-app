from flask_restful import Resource, reqparse
from ..models.user import User


class UserRes(Resource):
    def post(self):
        parser = reqparse.RequestParser()        
        parser.add_argument("email", required=True, help="Email must be provided")
        parser.add_argument("password", required=True, help="Password must be provided")
        args = parser.parse_args()

        password = args['password']
        email = args['email']
        user = User(email=email, password=password)
        user.create()
        return user.to_dict()

    def get(self):
        user_list = User.get_all()
        user_list_dict = [user.to_dict() for user in user_list]
        return user_list_dict