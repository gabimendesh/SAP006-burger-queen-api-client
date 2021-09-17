import React from 'react';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import FormSignIn from '../../components/forms/signIn';
import Button from '../../components/button';

export default function Login() {
  return (
    <>
      <section className={styles.logoArea}>
        <h1>Burger Queen</h1>
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
