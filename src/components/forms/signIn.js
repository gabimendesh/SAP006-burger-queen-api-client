import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../button';
import styles from './style.module.css';
import validateInfo from '../../services/validateInfo';
import useForm from '../../services/useForm';

export default function FormSignIn({ submitForm }) {
  const {
    handleChange, values, errors,
  } = useForm(submitForm, validateInfo);
  return (
    <form
      className={styles.box}
      onSubmit={(e) => {
        e.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
          .then((response) => response.json())
          .then((responseDone) => {
            const userRole = responseDone.role;
            const { token } = responseDone;
            localStorage.setItem('token', token);
            const userTokenOnLocalStorage = localStorage.getItem('token');
            if (userRole === 'Garçom - Garçonete') {
              <Redirect to="/menu" />;
              console.log('token do usuário no ls', userTokenOnLocalStorage);
            }
          });
      }}
    >
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
