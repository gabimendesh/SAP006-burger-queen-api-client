import React, { useState } from 'react';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import FormSignIn from '../../components/forms/signIn';
import Button from '../../components/button';
import logo from '../../images/logo.png';

export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => setIsSubmitted(true);
  return (
    <>
      <section className={styles.logoArea}>
        <img src={logo} alt="The emo's burger" className={styles.logo} />
      </section>
      <main>
        <div className={styles.loginScreen}>
          <section className={styles.formArea}>
            {!isSubmitted ? <FormSignIn submitForm={submitForm} /> : 'login concluído'}
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
