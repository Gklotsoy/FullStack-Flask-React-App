from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySql database configuration no password
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root@localhost:3306/dbfullstackapp"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)