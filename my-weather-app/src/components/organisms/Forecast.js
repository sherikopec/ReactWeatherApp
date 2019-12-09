import React, { Fragment, useState } from 'react';
import { chunkify } from '../../utils';
import DailyWeather from '../molecules/DailyWeather';
import './Forecast.css'

const Forecast = ({ forecast, ...props }) => {
  // Take forecast and split into equal chunks for each day.

  const chunkedForecast = chunkify(
    forecast,
    forecast.length / 5
  );

  // Get highest temp from forecast chunk
  const getMaxTemp = array =>
    array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
  // Get lowest temp from forecast chunk
  const getMinTemp = array =>
    array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));

  const [showHourly, setShowHourly] = useState(0);

  return (
    <div className='Forecast'>
      {chunkedForecast.map((day, i) => (
        <Fragment key={i}>
          {i === 0 && <h2>Today:</h2>}
          {i === 1 && <h2>Upcoming:</h2>}
          <DailyWeather className='DailyWeather'
            key={day[0].dt}
            date={day[0].dt_txt}
            icon={day[0].weather[0].icon}
            maxTemp={getMaxTemp(day).main.temp}
            minTemp={getMinTemp(day).main.temp}
            list={day}
            // index={i}
            onDailyClick={() => setShowHourly(i)}
            showHourly={showHourly === i}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Forecast;