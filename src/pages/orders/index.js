import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import styles from './style.module.css';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getOrders, updateOrder } from '../../services';
import STATUS from '../../constants/constants';
import { CardOrderToDelivery } from '../../components/card';

export default function Orders() {
  const [order, setOrders] = useState([]);
  const token = getUserTokenOnLocalStorage();

  const getAllOrders = () => {
    getOrders(token)
      .then((orders) => {
        setOrders(orders);
      });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const sortOrders = () => order.sort((a, b) => b.id - a.id);
  const orderFilter = sortOrders()
    .filter((orders) => orders.status
      === STATUS.DELIVERY
      || orders.status === STATUS.DELIVERED);

  const updateStatus = (item) => {
    const orderId = item.id;
    if (item.status === STATUS.DELIVERY) {
      updateOrder(orderId, STATUS.DELIVERED).then(() => getAllOrders());
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
