import React, { useEffect, useState } from 'react';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts } from '../../services/index';
import Card from '../../components/card/index';
import styles from './style.module.css';
import Menu from '../../components/menu';

export default function PageMenu() {
  const [menu, setMenu] = useState(true);
  const [breakfast, setBreakfastItens] = useState([]);
  const [allDay, setAllDayItens] = useState([]);

  useEffect(() => {
    getAllProducts(getUserTokenOnLocalStorage)
      .then((products) => {
        const breakfastItens = products.filter((item) => item.type === 'breakfast');
        const allDayItens = products.filter((item) => item.type === 'all-day');
        setBreakfastItens(breakfastItens);
        setAllDayItens(allDayItens);
      });
  }, []);

  return (
    <>
      <div className={styles['menu-container']}>
        <header>
          <Menu />
        </header>
        <div className={styles['toggle-menu-container']}>
          <button
            className={styles['option-menu-button']}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setMenu(true);
            }}
          >Café da manhã
          </button>
          <button
            className={styles['option-menu-button']}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setMenu(false);
            }}
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
          {
            menu ? breakfast && breakfast.map(({ name, price, id }) => (
              <Card ItemName={name} ItemPrice={price} key={id} />
            ))
              : allDay && allDay.map(({ name, price, id }) => (
                <Card ItemName={name} ItemPrice={price} key={id} />
              ))
          }
        </div>
      </div>
    </>
  );
}
