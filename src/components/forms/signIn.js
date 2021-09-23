import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button';
import styles from './style.module.css';
import useForm from '../../services/useForm';
import { signInWithEmailAndPassword } from '../../services/auth';

export default function FormSignIn({ submitForm }) {
  const {
    handleChange, values,
  } = useForm(submitForm);

  const history = useHistory('/');
  const [error, setError] = useState('');

  return (
    <form
      className={styles.box}
      onSubmit={(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(values.email, values.password)
          .then((response) => response.json())
          .then((responseDone) => {
            const { token } = responseDone;
            const userRole = responseDone.role;
            if (userRole === 'garçom - garçonete') {
              localStorage.setItem('token', token);
              history.push('/menu');
            }
            if (userRole === 'cozinha') {
              localStorage.setItem('token', token);
              history.push('/cozinha');
            } else if (responseDone) {
              const errorMessage = responseDone.message;
              setError(errorMessage);
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
      <input
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        className={styles.inputBox}
        value={values.password}
        onChange={handleChange}
      />
      <p className={styles.error}>
        {error}
      </p>

      <Button variant="primary" onClick={() => history.push('/menu')}>
        Entrar
      </Button>
    </form>
  );
}
