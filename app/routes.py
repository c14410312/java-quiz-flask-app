'''
This file will contain the different URL's that the application implements

handlers for the application routes are written as PY functions --> view functions

mapped to one or more route URLS --> flask knows the logic when to execute a client request
'''
from flask import render_template, request
from app import app
from app.models import Post, Category
import json
from app import db
from sqlalchemy.sql import func

def get_questions(selected_categories):
    #gets all the posts related to selected categories by user
    if selected_categories[0] == '':
        query = db.session.query(Post, Category).join(Category).order_by(func.random()).limit(10).all()
    else:
        query = db.session.query(Post, Category).join(Category).filter(Category.name.in_(selected_categories)).order_by(func.random()).limit(10)
    return query


@app.route('/') #decorators --> modifies function that follows it
@app.route('/index')
def index(): 
    categories = Category.query.all()
    return render_template('index.html', title='Home', categories=categories)

#route for the quiz
@app.route('/quiz')
def quiz():
    #retrieves the selected cats from url query --> converts to list
    data = request.args.get('cat_list')
    data = data.replace(', ', '-')
    selected_cats = data.split(",")
    #get questions related to categories chosen
    selected_cats = [el.replace('-', ', ') for el in selected_cats]
    print(selected_cats)
    query = get_questions(selected_cats)
    if(selected_cats[0] == ''):
        selected_cats=["random-selection"]
    return render_template('quiz.html', title='Quiz', query=query, cats=selected_cats)
