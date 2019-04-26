import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    APPLICATION_ROOT = "/api"
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///data.db"


class Production(Config):
    ENV = 'production'


class Development(Config):
    ENV = 'development'
    DEBUG = True


class Testing(Config):
    TESTING = True


config = {
    'production': Production,
    'development': Development,
    'testing': Testing,
    'default': Development
}
