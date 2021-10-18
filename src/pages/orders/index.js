import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders, updateOrder } from '../../services';
import status from '../../constants/constants';
import { CardOrder } from '../../components/card';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const token = getUserTokenOnLocalStorage();

  const getAllOrders = () => {
    getOrders(token).then((order) => {
      setOrders(order);
    });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const sortOrders = () => orders.sort((a, b) => b.id - a.id);
  const orderFilter = sortOrders().filter(
    (order) => order.status === status.delivery || order.status === status.delivered,
  );

  const update = (response, item) => {
    setOrders(
      orders.map((orderItem) => (orderItem.id === response.id
        ? { ...item, status: response.status }
        : orderItem)),
    );
  };

  const updateStatus = (item) => {
    const orderId = item.id;
    if (item.status === status.delivery) {
      updateOrder(orderId, status.delivered).then((response) => {
        update(response, item);
      });
    }
  };

  return (
    <>
      <div className={styles['orders-container']}>
        <header className="header">
          <Header>Histórico de Pedidos</Header>
        </header>
        <div className={styles.refresh}>
          <button
            type="button"
            className={styles['refresh-btn']}
            onClick={() => getAllOrders()}
          >
            <i className="fas fa-sync" />
          </button>
        </div>
        <div className={styles['itens-container']}>
          {orderFilter.map((item) => (
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
