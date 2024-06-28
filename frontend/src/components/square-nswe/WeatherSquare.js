import React from "react";
import '../styles/homepage.css';

const weatherSquareIMG = require("../images/nswe.svg").default;
const arrow360 = require("../images/arrow2.png");


function WeatherSquare() {

    return (
        <>
            <img src={weatherSquareIMG} alt="weather square" className="weathersquare" />
            <img src={arrow360} alt="wskazówka" className="arrow360" style={{width: '78px'}}/>
            <div className="weathersquare-round">
                <p className="wind_degree">sse</p>
            </div>
        </>
    )
}

export default WeatherSquare;