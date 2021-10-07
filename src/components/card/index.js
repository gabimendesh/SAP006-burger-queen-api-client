import React from 'react';
import styles from './style.module.css';

export function Card(props) {
  const { product, onIncrease } = props;
  return (
    <div className={styles['container-card']}>
      <div className={styles['image-container']}>
        <img src="https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?b=1&k=20&m=520215281&s=170667a&w=0&h=zeCb3SA1h2PJhk21K2jFR8QttbqMBq4L-8uGkQLH7OQ=" alt="item do cardápio" className={styles.image} />
      </div>
      <div className={styles.item}>
        <p>{product.name} {product.flavor} {product.complement ? `+ ${product.complement}` : ''}</p>
        <p>R${product.price}</p>
      </div>
      <div className={styles['controller-container']}>
        <button
          className={styles['add-item-button']}
          type="button"
          onClick={() => onIncrease(product)}
        >
          Adicionar ao pedido
        </button>
      </div>
    </div>

  );
}
export function CardOrder(props) {
  const { item, onClick } = props;
  const products = item.Products.filter((order) => order.name);

  return (
    <div className={styles['container-card-order']}>
      <section>
        <div className={styles['timer-container']}>
          <p>15 min</p>
        </div>
        <div className={styles['client-data']}>
          <p>Mesa - {item.table}</p>
          <p>Cliente - {item.client_name}</p>
        </div>
        <div className={styles['order-list']}>
          <ul className={styles.products}>
            {products.map((o) => (
              <li key={o.id}>
                {o.name} {o.qtd > 1 ? `${o.qtd}x` : ''} {o.flavor} {o.complement ? `+ ${o.complement}` : ''}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['controller-order-container']}>
          <button
            className={styles['status-button']}
            type="button"
            onClick={() => {
              onClick(item, 'Preparando');
            }}

          >
            {item.status}
          </button>
        </div>
      </section>
    </div>
  );
}
