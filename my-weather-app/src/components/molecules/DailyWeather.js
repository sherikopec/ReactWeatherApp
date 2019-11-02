import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div>
      <h3>{moment(date).format('dddd')}</h3>
      <WeatherIcon icon={icon} />
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeatherItem;