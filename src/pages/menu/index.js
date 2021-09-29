import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts } from '../../services/index';
import Card from '../../components/card/index';
import styles from './style.module.css';

export default function Menu() {
  const [product, setProducts] = useState([]);
  console.log(product);
  useEffect(() => {
    getAllProducts(getUserTokenOnLocalStorage)
      .then((products) => products)
      .then((item) => {
        setProducts(item);
      });
  }, []);
  return (
    <>
      <div className={styles['menu-container']}>
        <h1 className={styles.menu}>Menu</h1>
        <Link to="/">Logout</Link>
        <div className={styles['toggle-menu-container']}>
          <button
            className={styles['option-menu-button']}
            type="button"
          >Café da manhã
          </button>
          <button
            className={styles['option-menu-button']}
            type="button"
          >Menu Principal
          </button>
        </div>
        <div className={styles['client-data']}>
          <input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nome do cliente"
          />
          <input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nº da mesa"
          />
        </div>
        <div className={styles['itens-container']}>
          {product && product.map(({ name, price }) => (
            <Card ItemName={name} ItemPrice={price} />
          ))}
        </div>
      </div>
    </>
  );
}
