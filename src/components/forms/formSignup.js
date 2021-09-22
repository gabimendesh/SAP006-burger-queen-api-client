import React from 'react';
import { Link } from 'react-router-dom';
import validate from '../../services/validateInfo';
import useForm from '../../services/useForm';
import styles from './style.module.css';

const FormSignup = ({ submitForm }) => {
  const {
    handleChange, values, errors,
  } = useForm(submitForm, validate);

  React.useEffect(() => {

  }, []);

  const options = [
    {
      value: 'Cozinha',
      id: 'kitchen',
    },
    {
      value: 'Garçom - Garçonete',
      id: 'waiter',
    },
  ];

  return (
    <div className={styles['form-content-right']}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
              role: values.role,
              restaurant: values.restaurant,
            }),
          })
            .then((response) => response.json())
            .then((responseDone) => {
              console.log('Pessoas cadastradas =>', responseDone);
            });
        }}

      >
        <h1 className={styles.register}>
          Registro
        </h1>
        <input
          className={styles['form-input']}
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={values.name}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {errors.username}
        </p>
        <input
          className={styles['form-input']}
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={values.email}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {errors.email}
        </p>
        <input
          className={styles['form-input']}
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={values.password}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {errors.password}
        </p>
        <p className={styles.error}>
          {errors.password2}
        </p>
        <select
          onChange={handleChange}
          className={styles.select}
          value={options.value}
          name="role"
        >
          {options.map((option) => (
            <option
              key={option.id}
              value={option.value}
            >
              {option.value}
            </option>
          ))}
        </select>
        <p className={styles.error}>
          {errors.role}
        </p>
        <button className={styles['btn-register']} type="submit">
          Cadastre-se
        </button>
        <span className={styles['span-register']}>
          Ja tem conta?
        </span>
        <Link to="/" className={styles['link-login']}>Faça login</Link>
      </form>
    </div>
  );
};

export default FormSignup;
