import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders, updateOrder } from '../../services';
import { CardOrderToDelivery } from '../../components/card';

export default function Orders() {
  const [order, setOrders] = useState([]);

  useEffect(() => {
    getOrders(getUserTokenOnLocalStorage())
      .then((orders) => {
        setOrders(orders);
      });
  }, [order]);

  const orderFilter = order.filter((orders) => orders.status === 'Servir' || orders.status === 'Servido');

  const updateStatus = (item) => {
    const orderId = item.id;
    const update = () => setOrders([...order]);
    if (item.status === 'Servir') {
      updateOrder(orderId, 'Servido')
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
      <div className={styles['orders-container']}>
        <header className="header">
          <Header>Pedidos finalizados</Header>
        </header>
        <div className={styles['itens-container']}>
          {orderFilter.map((item) => (
            <CardOrderToDelivery
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
