import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import moment from 'moment';
import './HourlyWeatherItem.css'

const HourlyWeather = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div className='HourlyTime'>{moment.unix(time).format('ha')}</div>
      <WeatherIcon icon={icon} />
      <div className='HourlyTemp'>{Math.round(maxTemp)}&deg;</div>
    </li>
  );
};

export default HourlyWeather;