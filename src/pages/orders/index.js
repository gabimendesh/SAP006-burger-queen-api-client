import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders } from '../../services';
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
            />
          ))}
        </div>
      </div>
    </>
  );
}
