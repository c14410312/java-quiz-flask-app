'''
This script simply creates the application object as an instance 
of the class Flask

__name__ is a python predefined variable --> set to the name of the module which is being used

Flask uses the location of the module passed as the starting point when it needs to load associated resources such as templates etc. 
'''
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_heroku import Heroku

app = Flask(__name__)
heroku = Heroku(app)

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models
