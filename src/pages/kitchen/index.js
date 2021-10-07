import React, { useEffect, useState } from 'react';
import { getOrders } from '../../services';
import Header from '../../components/header';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { CardOrder } from '../../components/card';
import styles from './style.module.css';

export default function Kitchen() {
  const [order, setOrders] = useState([]);
  const sortOrders = () => order.sort((a, b) => b.id - a.id);

  useEffect(() => {
    getOrders(getUserTokenOnLocalStorage)
      .then((orders) => {
        setOrders(orders);
      });
  }, []);

  return (
    <>
      <div className={styles['kitchen-container']}>
        <header className="header">
          <Header>Cozinha</Header>
        </header>
        <div className={styles['itens-container']}>
          {sortOrders().map((item) => (
            <CardOrder key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
