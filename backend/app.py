# -*- encoding: utf-8 -*-
import os

import flask
import flask.ext.sqlalchemy
import flask.ext.restless

# Create the Flask application and the Flask-SQLAlchemy object.
app = flask.Flask(__name__)
app.config['DEBUG'] = os.environ.get('DEBUG', True)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL',
    'sqlite:///survey.db'
)

db = flask.ext.sqlalchemy.SQLAlchemy(app)

# Create your Flask-SQLALchemy models as usual but with the following two
# (reasonable) restrictions:
#   1. They must have a primary key column of type sqlalchemy.Integer or
#      type sqlalchemy.Unicode.
#   2. They must have an __init__ method which accepts keyword arguments for
#      all columns (the constructor in flask.ext.sqlalchemy.SQLAlchemy.Model
#      supplies such a method, so you don't need to declare a new one).


class Manufacturer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())


class Device(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, unique=True)
    manufacturer_id = db.Column(db.Integer, db.ForeignKey('manufacturer.id'))
    # manufacturer = db.relationship(
    #     'Manufacturer',
    #     backref=db.backref('manufacturers', lazy='dynamic')
    # )
    created_at = db.Column(db.DateTime, server_default=db.func.now())


class MacAddress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.Unicode, unique=True)
    country_code = db.Column(db.String)
    device_id = db.Column(db.Integer, db.ForeignKey('device.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())

# Create the database tables.
db.create_all()

# Create the Flask-Restless API manager.
manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.

for model in [Manufacturer, Device]:
    manager.create_api(model, methods=['GET', 'POST'])

for model in [Manufacturer, Device, MacAddress]:
    manager.create_api(model, methods=['GET', 'POST'])

# start the flask loop
app.run(port=os.environ.get('PORT', 8016))
