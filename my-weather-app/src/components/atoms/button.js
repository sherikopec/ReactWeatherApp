import React from 'react';
import './Button.css';

const Button = ({ onButtonClick, ...props }) => {
    return <a onClick={onButtonClick} className='Button'>{props.children}</a>;
};

export default Button;

