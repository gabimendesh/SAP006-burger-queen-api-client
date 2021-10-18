import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';
import Title from '../../images/Title.png';
import useForm from '../../services/useForm';
import styles from './style.module.css';
import Input from '../../components/input';

export default function Register({ submitForm }) {
  const {
    handleChange, values,
  } = useForm(submitForm);

  const history = useHistory();
  const [error, setError] = useState('');

  const options = [
    {
      value: 'Função',
      id: 'role',
      hidden: true,
    },
    {
      value: 'Cozinha',
      id: 'kitchen',
      hidden: false,
    },
    {
      value: 'Garçom - Garçonete',
      id: 'waiter',
      hidden: false,
    },
  ];
  return (
    <>
      <section className={styles.logoArea}>
        <img src={Title} alt="The emo's burger" className="logo-img" />
      </section>
      <div className={styles['form-content-right']}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            signUp(values.name, values.email, values.password, values.role, values.restaurant)
              .then((response) => {
                if (response.id) {
                  history.push('/');
                }
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
          }}

        >
          <h1 className={styles.register}>
            Registrar Funcionário
          </h1>
          <Input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            className={styles['form-input']}
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
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
            {options.map(({ value, id, hidden }) => (
              <option key={id} value={value} hidden={hidden}>
                {value}
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
    </>
  );
}
