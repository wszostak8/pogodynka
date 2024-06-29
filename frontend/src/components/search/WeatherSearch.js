import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/homepage.css';
import '../../styles/index.css';

function WeatherSearch({ city, setCity, fetchWeather }) {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Return') {
      fetchWeather();
    }
  };

  const searchIcon = require('../../images/search.svg').default;

  return (
    <div>
      <ToastContainer />
      <div className='search-weather'>
        <div className='search-icon-container'>
          <img src={searchIcon} alt='wyszukaj' className='search-icon'/>
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Wpisz dowolną miejscowość"
          className='search-city'
        />
      </div>
    </div>
  );
}

export default WeatherSearch;
