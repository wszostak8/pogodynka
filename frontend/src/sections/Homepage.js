import React, { useState } from "react";
import WeatherSearch from "../components/search/WeatherSearch";
import WeatherBoxSearch from "../components/search/WeatherBoxSearch";
import '../styles/homepage.css';
import '../styles/index.css';
import WeatherSlider from "../components/slider/WeatherSlider";
import 'react-toastify/dist/ReactToastify.css';
import fetchWeather from "../utils/FetchWeather";

function Homepage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = () => {
    if (city) {
      fetchWeather(city, setWeather, setError, setLoading);
    } else {
      setError("Proszę podać nazwę miasta");
    }
  };
  

  return (
    <div className="homepage-bg">
      <div className="homepage-section">


        <div className="homepage-search-weather-container">
          <div className="column1">
            <h1 style={{marginBottom: '4rem'}}>Pogoda w największych miastach w Polsce</h1>
            <WeatherSlider />
          </div>



          <div className="column2">
            <WeatherSearch 
              city={city}
              setCity={setCity}
              fetchWeather={handleFetchWeather}
              error={error}
            />
            <WeatherBoxSearch weather={weather} /> 
          </div>


        </div>

      </div>
    </div>
  );
}

export default Homepage;
