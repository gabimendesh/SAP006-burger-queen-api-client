import React from 'react';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import FormSignIn from '../../components/forms/signIn';
import Button from '../../components/button';
import logo from '../../images/logo.png';

export default function Login() {
  return (
    <>
      <section className={styles.logoArea}>
        <img src={logo} alt="The emo's burger" className={styles.logo} />
      </section>
      <main>
        <div className={styles.loginScreen}>
          <section className={styles.formArea}>
            <FormSignIn />
            <footer className={styles.footer}>
              <p>
                O funcionário ainda não é cadastrado? <br />
                <Button variant="secondary">
                  <Link to="/cadastro">
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
