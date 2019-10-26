import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import Link from '../atoms/Link';

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div>
      <CurrentCity city={city} />
      <Link onButtonClick={onTextLinkClick}>Change City</Link>
      <CurrentTemperature temperature={temperature} />
    </div>
  );
};

export default CurrentWeather;