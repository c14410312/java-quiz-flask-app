'''
This file will contain the different URL's that the application implements

handlers for the application routes are written as PY functions --> view functions

mapped to one or more route URLS --> flask knows the logic when to execute a client request
'''
from flask import render_template
from app import app
from app.models import Post, Category

@app.route('/') #decorators --> modifies function that follows it
@app.route('/index')
def index(): 
    categories = Category.query.all()
    return render_template('index.html', title='Home', categories=categories)
