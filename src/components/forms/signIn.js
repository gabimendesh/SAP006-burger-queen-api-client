import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button';
import styles from './style.module.css';
import validateInfo from '../../services/validateInfo';
import useForm from '../../services/useForm';

export default function FormSignIn({ submitForm }) {
  const {
    handleChange, values, handleSubmit,
  } = useForm(submitForm, validateInfo);

  const history = useHistory();
  // const [error, setError] = useState('');

  return (
    <form
      className={styles.box}
      onSubmit={handleSubmit}
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
        `error`
      </p>

      <Button variant="primary" onClick={() => history.push('/menu')}>
        Entrar
      </Button>
    </form>
  );
}
