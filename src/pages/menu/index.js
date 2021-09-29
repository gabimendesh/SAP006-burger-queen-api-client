import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/index';
import styles from './style.module.css';

export default function Menu() {
  return (
    <>
      <div className={styles['menu-container']}>
        <h1 className={styles.menu}>Menu</h1>
        <Link to="/">Logout</Link>
        <div className={styles['toggle-menu-container']}>
          <button
            className={styles['option-menu-button']}
            type="button"
          >Café da manhã
          </button>
          <button
            className={styles['option-menu-button']}
            type="button"
          >Menu Principal
          </button>
        </div>
        <div className={styles['client-data']}>
          <input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Cliente"
          />
          <input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nº da mesa"
          />
        </div>

        <Card />
      </div>
    </>
  );
}
