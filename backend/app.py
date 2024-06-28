from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/weather/*": {"origins": "*"}}) 

API_KEY = os.getenv('API_KEY')

def get_uv_level(uv_index):
    if uv_index < 3:
        return "niski"
    elif uv_index < 6:
        return "średni"
    else:
        return "wysoki"
    
def fix_city_names(location):
    if location == "Krakow Am See":
        return "Kraków"
    if location == "Wroclaw":
        return "Wrocław"
    if location == "Lodz":
        return "Łódź"
    if location == "Poznan":
        return "Poznań"
    if location == "Gdansk":
        return "Gdańsk"
    else:
        return location

@app.route('/weather/<city>', methods=['GET'])
def get_weather(city):
    url = f'http://api.weatherstack.com/current?access_key={API_KEY}&query={city}'
    response = requests.get(url)
    data = response.json()

    if 'error' in data:
        return jsonify({"error": data['error']['info']}), 404
    else:
        uv_index = data['current']['uv_index']
        uv_level = get_uv_level(uv_index)

        location_name = fix_city_names(data['location']['name'])

        wind_speed_kmh = data['current']['wind_speed']
        wind_speed_ms = round(wind_speed_kmh / 3.6)  # Konwersja prędkości wiatru z km/h na m/s
        
        weather_info = {
            "location": location_name,
            "temperature": data['current']['temperature'],
            "weather_descriptions": data['current']['weather_descriptions'],
            "wind_speed_kmh": wind_speed_kmh,
            "wind_speed_ms": wind_speed_ms,
            "wind_degree": data['current']['wind_degree'],
            "wind_dir": data['current']['wind_dir'],
            "humidity": data['current']['humidity'],
            "uv_index": uv_index,
            "uv_level": uv_level,
            "feels_like": data['current']['feelslike'],
            "visibility": data['current']['visibility']
        }
        return jsonify(weather_info)

if __name__ == '__main__':
    app.run(debug=True)
