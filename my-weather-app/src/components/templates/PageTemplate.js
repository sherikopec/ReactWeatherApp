import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import './PageTemplate.css';

const PageTemplate = ({ city, temperature, changeCity, ...props }) => {
  return (
    <div className='PageTemplate'>
      <CurrentWeather
        city={city}
        temperature={temperature}
        onTextLinkClick={changeCity}
      />
      {props.children}
    </div>
  );
};

export default PageTemplate;