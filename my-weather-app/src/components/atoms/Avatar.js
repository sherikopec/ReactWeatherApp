// Author's display picture in profile

import React from 'react';
import WeatherPerson from '../molecules/WeatherPerson';
import './Avatar.css'

const Avatar = ({ image, ...props }) => {
  return <img className='Avatar' src='/static/WeatherPerson.jpg' alt="Weather Person Avatar" />;
};

export default Avatar;