import React, { useEffect, useState } from 'react';
import { getOrders, updateOrder } from '../../services';
import Header from '../../components/header';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { CardOrder } from '../../components/card';
import status from '../../constants/constants';
import styles from './style.module.css';

export default function Kitchen() {
  const [orders, setOrders] = useState([]);
  const token = getUserTokenOnLocalStorage();

  const sortOrders = () => orders.sort((a, b) => b.id - a.id);

  const filteredOrders = sortOrders().filter(
    (item) => item.status !== status.delivery && item.status !== status.delivered,
  );

  const getAllOrders = () => {
    getOrders(token).then((order) => {
      setOrders(order);
    });
  };

  useEffect(() => {
    getAllOrders();
  }, [token]);

  const update = (response, item) => {
    setOrders(
      orders.map((orderItem) => (orderItem.id === response.id
        ? {
          ...item,
          status: response.status,
          updatedAt: new Date().toISOString(),
        }
        : orderItem)),
    );
  };

  const updateStatus = (item) => {
    const orderId = item.id;
    if (item.status === status.pending) {
      updateOrder(orderId, status.preparing).then((response) => {
        update(response, item);
      });
    } else if (item.status === status.preparing) {
      updateOrder(orderId, status.ready).then((response) => {
        update(response, item);
      });
    } else if (item.status === status.ready) {
      updateOrder(orderId, status.delivery).then((response) => {
        update(response, item);
      });
    }
  };

  return (
    <>
      <div className={styles['kitchen-container']}>
        <header className="header">
          <Header>Cozinha</Header>
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
          {filteredOrders.map((item) => (
            <CardOrder key={item.id} item={item} onClick={updateStatus} />
          ))}
        </div>
      </div>
    </>
  );
}
