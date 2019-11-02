// Author's display picture in profile

import React from 'react';

const Avatar = ({ image, ...props }) => {
  return <img src={image} alt="Weather Person Avatar" />;
};

export default Avatar;