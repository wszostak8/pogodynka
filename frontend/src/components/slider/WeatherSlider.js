import React, { useEffect, useState } from "react";
import "../../styles/swiper.css";
import "../../styles/homepage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WeatherBoxSlider from "./WeatherBoxSlider";

const useCheckMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 800);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return isMobile;
}

const WeatherSliderResizeing = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <Swiper
      pagination={{ type: 'progressbar' }}
      navigation={true}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="weatherbox-slider-container">
          {isMobile ? (
            <>
              <WeatherBoxSlider city='Warszawa' />
            </>
          ) : (
            <>
              <WeatherBoxSlider city='Warszawa' />
              <WeatherBoxSlider city='Krakow' />
            </>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="weatherbox-slider-container">
          {isMobile ? (
            <>
              <WeatherBoxSlider city='Krakow' />
            </>
          ) : (
            <>
              <WeatherBoxSlider city='Wroclaw' />
              <WeatherBoxSlider city='Lodz' />
            </>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="weatherbox-slider-container">
          {isMobile ? (
            <>
              <WeatherBoxSlider city='Wroclaw' />
            </>
          ) : (
            <>
              <WeatherBoxSlider city='Poznan' />
              <WeatherBoxSlider city='Gdansk' />
            </>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="weatherbox-slider-container">
          {isMobile ? (
            <>
              <WeatherBoxSlider city='Lodz' />
            </>
          ) : (
            <>
              <WeatherBoxSlider city='Szczecin' />
              <WeatherBoxSlider city='Lublin' />
            </>
          )}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

function WeatherSlider() {
  return (
    <WeatherSliderResizeing />
  );
}

export default WeatherSlider;
