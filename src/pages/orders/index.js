import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders, updateOrder } from '../../services';
import { CardOrderToDelivery } from '../../components/card';

export default function Orders() {
  const [order, setOrders] = useState([]);
  const token = getUserTokenOnLocalStorage();

  useEffect(() => {
    getOrders(token)
      .then((orders) => {
        setOrders(orders);
      });
  }, []);

  const sortOrders = () => order.sort((a, b) => b.id - a.id);
  const orderFilter = sortOrders()
    .filter((orders) => orders.status === 'Servir' || orders.status === 'Servido');

  const updateStatus = (item) => {
    const orderId = item.id;
    if (item.status === 'Servir') {
      updateOrder(orderId, 'Servido');
    }
  };

  return (
    <>
      <div className={styles['orders-container']}>
        <header className="header">
          <Header>Pedidos finalizados</Header>
        </header>
        <div className={styles['itens-container']}>
          {
            orderFilter.map((item) => (
              <CardOrderToDelivery
                key={item.id}
                item={item}
                onClick={updateStatus}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}
