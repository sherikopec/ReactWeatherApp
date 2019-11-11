import React from 'react';
import './CurrentCity.css'

const CurrentCity = ({ city, ...props }) => {
    return <h1 className='CurrentCity'>{city}</h1>;
};

export default CurrentCity;
