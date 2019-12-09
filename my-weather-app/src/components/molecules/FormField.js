import React from 'react';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';

const FormField = ({ onChange, value, label, type, name, ...props }) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      {type === 'text' && <TextInput name={name} onChange={onChange} value={value} />}
      {type === 'textarea' && <TextArea name={name} onChange={onChange} value={value} />}
    </>
  );
};

export default FormField;