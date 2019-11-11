import React from 'react';

const TextArea = ({onChange, value, name, props}) => {
    return <textarea name={name} onChange={onChange} value={value}/>
};

export default TextArea;

