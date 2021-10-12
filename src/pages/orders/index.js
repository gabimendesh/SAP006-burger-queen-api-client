import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders, updateOrder } from '../../services';
import { CardOrderToDelivery } from '../../components/card';

export default function Orders() {
  const [order, setOrders] = useState([]);
  const [ordersToFilter, setOrdersToFilter] = useState([]);

  useEffect(() => {
    getOrders(getUserTokenOnLocalStorage())
      .then((orders) => {
        setOrders(orders);
      });
  }, [order]);

  useEffect(() => {
    setOrdersToFilter(order.filter((orders) => orders.status === 'Finalizado'));
  }, [order]);

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
      updateOrder(orderId, 'Servido')
        .then((response) => {
          const exist = order.find((client) => client.id === response.id);
          if (exist) {
            update();
          }
        });
    }
    console.log(item.status);
  };
  return (
    <>
      <div className={styles['orders-container']}>
        <header className="header">
          <Header>Pedidos finalizados</Header>
        </header>
        <div className={styles['itens-container']}>
          {ordersToFilter.map((item) => (
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
