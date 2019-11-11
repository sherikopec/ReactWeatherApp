import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import moment from 'moment';

const HourlyWeather = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{moment(time).format('LT')}</div>
      <WeatherIcon icon={icon} />
      <div>{Math.round(maxTemp)}&deg;</div>
    </li>
  );
};

export default HourlyWeather;