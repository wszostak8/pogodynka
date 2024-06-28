import React from 'react';

const weatherSquareIMG = require("../images/nswe.svg").default;
const arrow360 = require("../images/arrow.svg").default;

const WeatherData = ({ icon, heading, value, unit, addImg, className, windDegree, weather }) => {
  const isBox4 = className === "box4";

  return (
    <div className={`weather-grid ${isBox4 ? "box4" : ""}`}>
      {isBox4 &&
        <div className="box4-content">
          <div>
            <img src={weatherSquareIMG} alt="weather square" className="weathersquare" />
          </div>
          <div className="weathersquare-round">
            <p className="wind_degree">{weather.wind_dir}</p>
          </div>
          <div className="fixArrow" style={{ transform: `rotate(${weather.wind_degree}deg)` }}>
            <img src={arrow360} alt="wskazówka" className="arrow360" />
          </div>
        </div>}
      <div className="weather-grid-data-container">
        <div className="indeksUV-heading">
          <img src={icon} alt={`${heading} ikona`} className="weather-icon" />
          <p className="heading-weatherdata">{heading}</p>
        </div>
        <div className="indeksUV-data">
          <p className="count">{value}</p>
          <p className="count-var">{unit}</p>
        </div>
        {addImg && <img src={addImg} alt="additional" className="uv-bar-icon" />}
        {windDegree && <img src={windDegree} alt="additional" className="uv-bar-icon" />}
      </div>
    </div>
  );
};

export default WeatherData;
