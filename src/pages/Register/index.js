import React, { useState } from 'react';
import FormSignup from '../../components/form/formSignup';
import FormSucess from '../../components/form/formSucess';
import './register.css';

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : (<FormSucess />)}
    </>
  );
}
