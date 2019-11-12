import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';
import './WeatherPage.css'

const WeatherPage = ({city, temperature, changeCity, forecast,...props}) => {

 
  return (
   <PageTemplate
     city={city}
     temperature={temperature}
     changeCity={changeCity}
   >
     <Forecast forecast={forecast} />
     <div className='ComplaintLink'>
       <p>Don't like the weather?</p>
        <Link to="/complain" className='ComplaintButton'>
          <Button>Complain to the weather person</Button>
        </Link>
    </div>
   </PageTemplate>
 );
};
export default WeatherPage;