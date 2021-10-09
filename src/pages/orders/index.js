import React from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { CardOrderToDelivery } from '../../components/card';

export default function Orders() {
  return (
    <>
      <div className={styles['orders-container']}>
        <header className="header">
          <Header>Pedidos realizados</Header>
        </header>
        <div className={styles['itens-container']}>
          <CardOrderToDelivery />
        </div>
      </div>
    </>
  );
}
