import React, { useState } from 'react';
import styles from './style.module.css';

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles['container-card']}>
      <div className={styles['image-container']}>
        <img src="https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?b=1&k=20&m=520215281&s=170667a&w=0&h=zeCb3SA1h2PJhk21K2jFR8QttbqMBq4L-8uGkQLH7OQ=" alt="item do cardápio" className={styles.image} />
      </div>
      <div className={styles.item}>
        <p>Hambúrguer simples</p>
        <p>R$ 15</p>
      </div>
      <div className={styles['controller-container']}>
        <button
          className={styles['remove-item-button']}
          type="button"
          onClick={() => {
            const counting = (count > 0) ? (count - 1) : count;
            setCount(counting);
          }}
        >
          -
        </button>
        <p className={styles.item}>{count}</p>
        <button
          className={styles['add-item-button']}
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>

  );
}
