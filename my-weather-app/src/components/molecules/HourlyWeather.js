// Moment.js is a JS library that makes formatting dates in JS super easy!
// import moment from 'moment';
import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import './HourlyWeather.css'

const HourlyWeather = ({ list, ...props }) => {
  return (
    <div className='HourlyWeather'>
      <ul className='HourlyWeatherList'>
        {list.map(item => (
          <HourlyWeatherItem
            key={item.dt}
            time={item.dt}
            icon={item.weather[0].icon}
            maxTemp={item.main.temp_max}
          />
        ))}
      </ul>
    </div>
  );
};

export default HourlyWeather;