import React from 'react';
import './Profile.css'

const Profile = ({ ...props }) => {
  return (
    <div className='Profile'>
      <h2><strong>Clive</strong> Weathers</h2>
      <p>Clive has been a hipster weather person for over 40 years and he's too busy taste testing a new chai latte before the big new sneaker drop to read your complaints</p>
    </div>
  );
};

export default Profile;