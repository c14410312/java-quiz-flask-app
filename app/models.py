from app import db
from sqlalchemy.dialects.postgresql import ARRAY, HSTORE
from sqlalchemy.orm import relationship

db.Model.metadata.reflect(db.engine)

#define all models here
class Category(db.Model):

    __table__ = db.Model.metadata.tables['category']

    def __repr__(self):
        return '<category {}>'.format(self.name)

class Post(db.Model):
    
    __table__ = db.Model.metadata.tables['posts']

    def __repr__(self):

        return '<h1> {} </h1> <p> {} </p>'.format(self.title,self.answer)

