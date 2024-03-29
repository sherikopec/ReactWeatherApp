import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeather.css'

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, onDailyClick, showHourly, ...props }) => {
  return (
    <div onClick={onDailyClick}>
      <div className='DailyWeather'>
        <h3>{moment(date).format('dddd')}</h3>
        <div className='MinMax'>
          <WeatherIcon icon={icon} />
          <div className='Max'><strong>{Math.round(maxTemp)}</strong>&deg;</div>
          <div className='Min'>{Math.round(minTemp)}&deg;</div>
        </div>
      </div>
      {showHourly && <HourlyWeather list={list} />}
    </div>
  );
};

export default DailyWeatherItem;