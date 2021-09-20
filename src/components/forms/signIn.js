import React from 'react';
import Button from '../button';
import styles from './style.module.css';
import validateInfo from '../../validateInfo';
import useForm from '../../useForm';

export default function FormSignIn({ submitForm }) {
  const {
    handleChange, values, handleSubmit, errors,
  } = useForm(submitForm, validateInfo);
  return (
    <form className={styles.box} onSubmit={handleSubmit}>
      <p className={styles.subTitle}>
        Login
      </p>
      <input
        type="email"
        name="email"
        placeholder="Digite o seu email"
        className={styles.inputBox}
        value={values.email}
        onChange={handleChange}
      />
      <p className={styles.error}>
        {errors.email}
      </p>
      <input
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        className={styles.inputBox}
        value={values.password}
        onChange={handleChange}
      />
      <p className={styles.error}>
        {errors.password}
      </p>

      <Button variant="primary">
        Entrar
      </Button>
    </form>
  );
}
