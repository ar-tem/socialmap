from app import db
from sqlalchemy.dialects.postgresql import JSON

class User_request(db.Model):
	__tablename__ = 'user_request'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(250))
	latitude = db.Column(db.Float, nullable=False)
	longitude = db.Column(db.Float, nullable=False)

