import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import Button from '../atoms/Button'

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div>
      <CurrentCity city={city} />
      <Button onButtonClick={onTextLinkClick}>Change City</Button>
      <CurrentTemperature temperature={temperature} />
    </div>
  );
};

export default CurrentWeather;