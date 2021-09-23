import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../services/useForm';
import styles from './style.module.css';
import { signUp } from '../../services/auth';

const FormSignup = ({ submitForm }) => {
  const {
    handleChange, values,
  } = useForm(submitForm);

  const [error, setError] = useState('');

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
          signUp(values.name, values.email, values.password, values.role, values.restaurant)
            .then((response) => console.log(response))
            .catch((err) => {
              const errorMessage = err.message;
              setError(errorMessage);
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
        <input
          className={styles['form-input']}
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          className={styles['form-input']}
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={values.password}
          onChange={handleChange}
        />
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
          {error}
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
