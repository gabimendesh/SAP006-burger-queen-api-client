import React, { useState } from 'react';
import FormSignup from '../../components/forms/formSignup';
import FormSucess from '../../components/forms/formSucess';
import './register.css';

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : (<FormSucess />)}
    </>
  );
}
