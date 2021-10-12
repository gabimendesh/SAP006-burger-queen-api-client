import React, { useEffect, useState } from 'react';
import { getOrders, updateOrder } from '../../services';
import Header from '../../components/header';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { CardOrder } from '../../components/card';
import styles from './style.module.css';

export default function Kitchen() {
  const [order, setOrders] = useState([]);

  const sortOrders = () => order.sort((a, b) => b.id - a.id);

  const filteredOrders = sortOrders().filter((item) => item.status !== 'Servir' && item.status !== 'Servido');
  console.log('pendente, preparando, finalizado', filteredOrders);
  useEffect(() => {
    getOrders(getUserTokenOnLocalStorage())
      .then((orders) => {
        setOrders(orders);
      });
  }, []);

  const updateStatus = (item) => {
    const orderId = item.id;
    const update = () => setOrders([...order]);
    if (item.status === 'pending') {
      updateOrder(orderId, 'Preparando')
        .then((response) => {
          const exist = order.find((client) => client.id === response.id);
          if (exist) {
            update();
          }
        });
    } else if (item.status === 'Preparando') {
      updateOrder(orderId, 'Finalizado')
        .then((response) => {
          const exist = order.find((client) => client.id === response.id);
          if (exist) {
            update();
          }
        });
    } else if (item.status === 'Finalizado') {
      updateOrder(orderId, 'Servir')
        .then((response) => {
          const exist = order.find((client) => client.id === response.id);
          if (exist) {
            update();
          }
        });
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
