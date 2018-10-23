from flask import Flask, request, render_template
import requests
from flask_sqlalchemy import SQLAlchemy
import os
import folium.plugins
from map import generate_map
from  vk_api import get_photos
from models import db


POSTGRES = {
    'user': 'portal',
    'pw': 'Bac12345',
    'db': 'mapdata',
    'host': 'localhost',
    'port': '5432',
}
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{user}:{pw}@{host}:{port}/{db}'.format(
                                                                  user=POSTGRES['user'],
                                                                  pw=POSTGRES['pw'],
                                                                  db=POSTGRES['db'],
                                                                  host=POSTGRES['host'],
                                                                  port=POSTGRES['port'])
db.init_app(app)

@app.route("/", methods=['GET', 'POST'])
def main():
  if request.method == 'GET':
    return render_template('index.html')
  elif request.method == 'POST':
    return render_template('index.html', tag=request.form['tag_search'], user_name='Артем')

@app.route("/map", methods=['GET'])
def map ():
  if not request.args.get('tag_search'):
    result = None
  else:
    result = get_photos(request.args.get('tag_search'))
  map_markers = generate_map(result)
  return map_markers.render()

@app.route("/plot", methods=['GET'])
def plot():
  return 'Если повезет, то тут будут графики'

@app.route("/auth", methods=['GET'])
def auth_inst():
  print(request.args.get('code'))
  auth = requests.post('https://api.instagram.com/oauth/access_token', data={'client_id': '885c2706174d4e99a75f5ee3711364fd',
                                                                      'client_secret': 'e6bf8897fdd947088491318e9dd70cc6',
                                                                      'grant_type': 'authorization_code',
                                                                      'redirect_uri': 'http://127.0.0.1:5000/auth',
                                                                      'code': str(request.args.get('code')) })
  print (auth.json())
   

if __name__ == "__main__":
    app.run(debug=True)