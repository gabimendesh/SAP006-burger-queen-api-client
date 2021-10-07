import React, { useEffect, useState } from 'react';
import { getOrders, updateOrder } from '../../services';
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

  const updateStatus = (item) => {
    const orderId = item.id;
    if (item.status === 'pending') {
      updateOrder(orderId, 'Preparando')
        .then((response) => console.log(response));
    } else {
      updateOrder(orderId, 'Finalizado')
        .then((response) => console.log(response));
    }
  };

  return (
    <>
      <div className={styles['kitchen-container']}>
        <header className="header">
          <Header>Cozinha</Header>
        </header>
        <div className={styles['itens-container']}>
          {sortOrders().map((item) => (
            <CardOrder
              key={item.id}
              item={item}
              onClick={updateStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
}
