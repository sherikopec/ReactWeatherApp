import React from 'react';

const TextInput = ({onChange, value, name, props}) => {
    return <input type="text" name={name} onChange={onChange} value={value} />
};

export default TextInput;

