import React, { useEffect, useState } from 'react';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts } from '../../services/index';
import Card from '../../components/card/index';
import styles from './style.module.css';
import Menu from '../../components/menu';

export default function PageMenu() {
  const [open, setOpen] = useState(false);
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
        <header className="header">
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
        <footer className="footer">
          <button
            className="btn-orders"
            type="button"
            onClick={() => setOpen(!open)}
          >
            Pedidos
            <i className="fas fa-hamburger" />
          </button>
          <div className={open ? 'open-orders' : 'close-orders'}>
            <section className="subtitles-container">
              <p className="item-subtitle">Item</p>
              <p>Qtd.</p>
              <p>Preço</p>
            </section>
            <div className="item-list">
              <p className="item-name">Hamburguer Simples</p>
              <p className="item-number">2</p>
              <p className="item-price">R$ 15,00</p>
              <button type="button" id="delete-order" className="trash">
                <i className="fas fa-trash-alt" />
              </button>
            </div>
            <section className="resultOrders">
              <div className="total-price">
                <p>Total a pagar</p>
                <p>R$ 15,00</p>
              </div>
              <div className="buttons">
                <button type="button" className="btn-confirm">Confirmar pedido</button>
                <button type="button" className="btn-cancel">Cancelar</button>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
