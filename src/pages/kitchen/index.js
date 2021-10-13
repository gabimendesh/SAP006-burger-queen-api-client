import React, { useEffect, useState } from 'react';
import { getOrders, updateOrder } from '../../services';
import Header from '../../components/header';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { CardOrder } from '../../components/card';
import styles from './style.module.css';

export default function Kitchen() {
  const [order, setOrders] = useState([]);
  const token = getUserTokenOnLocalStorage();

  const sortOrders = () => order.sort((a, b) => b.id - a.id);

  const filteredOrders = sortOrders()
    .filter((item) => item.status !== 'Servir' && item.status !== 'Servido');

  const getAllOrders = () => {
    getOrders(token)
      .then((orders) => {
        setOrders(orders);
      });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const updateStatus = (item) => {
    const orderId = item.id;

    if (item.status === 'pending') {
      updateOrder(orderId, 'Preparando').then(() => getAllOrders());
    } else if (item.status === 'Preparando') {
      updateOrder(orderId, 'Finalizado').then(() => getAllOrders());
    } else if (item.status === 'Finalizado') {
      updateOrder(orderId, 'Servir').then(() => getAllOrders());
    }
  };

  return (
    <>
      <div className={styles['kitchen-container']}>
        <header className="header">
          <Header>Cozinha</Header>
        </header>
        <div className={styles['itens-container']}>
          {filteredOrders.map((item) => (
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
