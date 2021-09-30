import React, { useState } from 'react';
import '../../styles/global.css';
import { Link, useHistory } from 'react-router-dom';
import styles from './style.module.css';
import Button from '../../components/button/index';
import useForm from '../../services/useForm';
import { signInWithEmailAndPassword } from '../../services/auth';
import { saveUserTokenOnLocalStorage } from '../../services/localStorage';
import logo from '../../images/logo.png';

export default function Login({ submitForm }) {
  const {
    handleChange, values,
  } = useForm(submitForm);

  const history = useHistory();
  const [error, setError] = useState('');
  return (
    <>
      <section className={styles.logoArea}>
        <img src={logo} alt="The emo's burger" className={styles.logo} />
      </section>
      <main>
        <div className={styles.loginScreen}>
          <section className={styles.formArea}>
            <form
              data-testid="form"
              className={styles.box}
              onSubmit={(e) => {
                e.preventDefault();
                signInWithEmailAndPassword(values.email, values.password)
                  .then((response) => {
                    if (response.role === 'garçom - garçonete') {
                      saveUserTokenOnLocalStorage(response.token);
                      history.push('/menu');
                    }
                    if (response.role === 'cozinha') {
                      saveUserTokenOnLocalStorage(response.token);
                      history.push('/cozinha');
                    }
                  })
                  .catch((err) => {
                    const errorMessage = err.message;
                    setError(errorMessage);
                  });
              }}
            >
              <p className={styles.subTitle}>
                Login
              </p>
              <input
                data-testid="email"
                type="email"
                name="email"
                placeholder="Digite o seu email"
                className={styles.inputBox}
                value={values.email}
                onChange={handleChange}
              />
              <input
                data-testid="password"
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

              <Button variant="primary" onClick={() => history.push('/menu')} id="buttom">
                Entrar
              </Button>
            </form>
            <footer className={styles.footer}>
              <p>
                O funcionário ainda não é cadastrado? <br />
                <Button variant="secondary">
                  <Link to="/cadastro" className={styles['link-register']}>
                    Cadastrar
                  </Link>
                </Button>
              </p>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
