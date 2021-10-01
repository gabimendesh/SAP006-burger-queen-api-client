import React, { useState } from 'react';
import styles from './style.module.css';

export default function Card({ ItemName, ItemPrice }) {
  const [addItem, setAddItem] = useState([]);

  return (
    <div className={styles['container-card']}>
      <div className={styles['image-container']}>
        <img src="https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?b=1&k=20&m=520215281&s=170667a&w=0&h=zeCb3SA1h2PJhk21K2jFR8QttbqMBq4L-8uGkQLH7OQ=" alt="item do cardápio" className={styles.image} />
      </div>
      <div className={styles.item}>
        <p>{ItemName}</p>
        <p>R{ItemPrice}</p>
      </div>
      <div className={styles['controller-container']}>
        <button
          className={styles['remove-item-button']}
          type="button"
          onClick={() => {
            setAddItem([...addItem, { nome: ItemName, preco: ItemPrice }]);
          }}
        >
          -
        </button>
        <p className={styles.item} />
        <button
          className={styles['add-item-button']}
          type="button"
          onClick={() => setAddItem([...addItem, { nome: ItemName, preco: ItemPrice }])}
        >
          +
        </button>
      </div>
    </div>

  );
}
