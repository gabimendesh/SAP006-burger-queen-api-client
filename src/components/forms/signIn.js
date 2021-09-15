import React from 'react';
import Button from '../button';
import styles from './style.module.css';

export default function FormSignIn(props) {
  console.log(props);
  return (
    <form className={styles.box}>
      <p className={styles.subTitle}>
        Login
      </p>
      <input type="email" placeholder="Email" className={styles.inputBox} />
      <input type="password" placeholder="Senha" className={styles.inputBox} />
      <Button variant="primary">
        Entrar
      </Button>
    </form>
  );
}
