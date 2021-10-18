import React from 'react';

export default function Input(props) {
  const {
    className, type, placeholder, onChange, value, name,
  } = props;
  return (

    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}

    />
  );
}
