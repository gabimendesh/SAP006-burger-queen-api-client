import React from 'react';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import FormSignIn from '../../components/forms/signIn';
import Button from '../../components/button';

export default function Login() {
  React.useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'GET',
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYmlAZ21haWwuY29tIiwiaWQiOjIyMTYsImlhdCI6MTYzMTgzMjc3MCwiZXhwIjoxNjYzMzkwMzcwfQ.rqKTW88nG-z8jhY4hjQ7FKf-Ryb0O7cnVlTHEw5AmBM',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseDone) => {
        console.log('Pessoas cadastradas =>', responseDone);
      });
  }, []);
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
