import React from 'react';
import './TextArea.css'

const TextArea = ({onChange, value, name, props}) => {
    return <textarea className='FormMessage' name={name} onChange={onChange} value={value}/>
};

export default TextArea;

