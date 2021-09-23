import React, { useState } from 'react';
import FormSignup from '../../components/forms/signUp';
import FormSucess from '../../components/forms/formSucess';
import Title from '../../images/Title.png';
import styles from './style.module.css';

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => setIsSubmitted(true);
  return (
    <>
      <section className={styles.logoArea}>
        <img src={Title} alt="The emo's burger" className="logo-img" />
      </section>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : (<FormSucess />)}
    </>
  );
}
