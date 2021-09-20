import React from 'react';
import { Link } from 'react-router-dom';
import validate from '../../validateInfo';
import useForm from '../../useForm';
import styles from './style.module.css';

const FormSignup = ({ submitForm }) => {
  const {
    handleChange, values, handleSubmit, errors,
  } = useForm(submitForm, validate);
  return (
    <div className={styles['form-content-right']}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.register}>
          Registro
        </h1>
        <input
          className={styles['form-input']}
          type="text"
          name="username"
          placeholder="Digite seu nome"
          value={values.username}
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
        <input
          className={styles['form-input']}
          type="password"
          name="password2"
          placeholder="Confirme sua senha"
          value={values.password2}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {errors.password2}
        </p>
        <select name="select" id="select" className={styles.select}>
          <option selected disabled>Cargo</option>
          <option value="cozinheiro">Cozinheiro</option>
          <option value="garçom">Garçom</option>
        </select>
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
