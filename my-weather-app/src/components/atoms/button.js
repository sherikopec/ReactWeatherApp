import React from 'react';
import './Button.css';

const Button = ({ onButtonClick, ...props }) => {
    return <a className='Button' onClick={onButtonClick}>{props.children}</a>;
};

export default Button;

