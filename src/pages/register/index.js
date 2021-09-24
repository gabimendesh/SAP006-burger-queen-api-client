import React from 'react';
import FormSignup from '../../components/forms/signUp';
import Title from '../../images/Title.png';
import styles from './style.module.css';

export default function Register() {
  return (
    <>
      <section className={styles.logoArea}>
        <img src={Title} alt="The emo's burger" className="logo-img" />
      </section>
      <FormSignup />
    </>
  );
}
