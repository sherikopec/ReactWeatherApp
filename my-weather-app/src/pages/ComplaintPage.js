import React from 'react';
import Link from '../components/atoms/Link';
import AuthorInfo from '../components/molecules/AuthorInfo';
import ComplaintForm from '../components/molecules/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';
import { CURRENT_WEATHER } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <Link>I changed my mind!</Link>
      <AuthorInfo />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default WeatherPage;