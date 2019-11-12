import React from 'react';
import './TextInput.css'

const TextInput = ({onChange, value, name, props}) => {
    return <input className='TextInput' type="text" name={name} onChange={onChange} value={value} />
};

export default TextInput;

