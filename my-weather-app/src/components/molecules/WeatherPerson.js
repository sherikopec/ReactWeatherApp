import React from 'react';
import Avatar from '../atoms/Avatar';
import Profile from '../atoms/Profile';
import './WeatherPerson.css'

const WeatherPerson = () => {
  return (
    <div className='WeatherPersonProfile'>
      <Avatar />
      <Profile />
    </div>
  );
};

export default WeatherPerson;