import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import WeatherPerson from '../components/molecules/WeatherPerson';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';
import './ComplaintPage.css'

const ComplaintPage= ({city, temperature, changeCity,...props}) => {
 return (
   <PageTemplate
     city={city}
     temperature={temperature}
     changeCity={changeCity}
   >
  <div className='BackLinkContainer'>
     <Link to="/" className='BackLink'>
       <Button>I regret this, take me back</Button>
     </Link>
  </div>

     <WeatherPerson />
     <ComplaintForm />
   </PageTemplate>
 );
};
export default ComplaintPage;