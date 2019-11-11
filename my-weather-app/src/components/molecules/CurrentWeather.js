import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import Button from '../atoms/Button'
import './CurrentWeather.css'

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
      <div className='CurrentWeather' style={{ backgroundImage: `url(/Static/${city}.jpg),linear-gradient(rgba(56, 22, 119, 0.35),rgba(56, 22, 119, 0.35))` }}>
        <CurrentCity city={city} />
        <Button onButtonClick={onTextLinkClick}>Change City</Button>
        <CurrentTemperature temperature={temperature} />
      </div>

      // <div className='Divider'>
      // </div>
  );
};

export default CurrentWeather;