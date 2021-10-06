import React, { useEffect } from 'react';
import styles from './style.module.css';
import { getOrders } from '../../services';
import Header from '../../components/header';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';

export default function Kitchen() {
  useEffect(() => {
    getOrders(getUserTokenOnLocalStorage)
      .then((orders) => {
        console.log(orders);
      });
  }, []);
  return (
    <>
      <div className={styles['menu-container']}>
        <header className="header">
          <Header>Cozinha</Header>
        </header>
      </div>
    </>
  );
}
