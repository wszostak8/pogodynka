import React, { useState, useEffect } from 'react';
import WeatherData from '../WeatherData'; 
import { translationMap } from '../../utils/TranslationMap';
import { icons } from '../../utils/Icons';

import fetchWeather from '../../utils/FetchWeather';

const WeatherBoxSlider = ({ city }) => {
  const [weather, setWeather] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (city) => {
      try {
        setLoading(true);
        await fetchWeather(city, setWeather, setError);
      } catch (err) {
        console.error('Błąd podczas pobierania danych pogodowych:', err);
        setError('Błąd podczas pobierania danych pogodowych');
      } finally {
        setLoading(false);
      }
    };

    if (city && !weather && !loading) {
      fetchData(city);
    }
  }, [city, weather, loading]);

  if (!weather || !weather.weather_descriptions) return null;

  const translatedDescriptions = weather.weather_descriptions.map(
    desc => translationMap[desc] || desc
  );

  return (
   <div className="slider-weather-box">
      <h4>{weather.temperature} °C</h4>
      <div className="separator-weatherbox" />

      <div className="city-weatherbox">
        <p className="city">{weather.location}</p>
        <div className="separator-weatherbox-pionowo"></div>
        <p className="weather-description">{translatedDescriptions.join(', ')}</p>
      </div>

      <div className="weatherbox-params-small">
        <WeatherData
          icon={icons.uv}
          heading="indeks UV"
          value={weather.uv_index}
          unit={weather.uv_level}
          addImg={icons.uvBar}
          className="box1"
          weather={weather}
        />
        <WeatherData
          icon={icons.feelsLike}
          heading="odczuwalna"
          value={weather.feels_like}
          unit="°C"
          className="box2"
          weather={weather}
        />
        <WeatherData
          icon={icons.humidity}
          heading="wilgotność"
          value={weather.humidity}
          unit="%"
          className="box3"
          weather={weather}
        />
        <WeatherData
          icon={icons.wind}
          heading="wiatr"
          value={weather.wind_speed_ms}
          unit="m/s"
          className="box4"
          weather={weather}
        />
        <WeatherData
          icon={icons.visibility}
          heading="widoczność"
          value={weather.visibility}
          unit="km"
          className="box5"
          weather={weather}
        />
      </div>
    </div>
  );
};

export default WeatherBoxSlider;
