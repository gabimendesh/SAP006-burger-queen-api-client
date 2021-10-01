import React, { useEffect, useState } from 'react';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts } from '../../services/index';
import Card from '../../components/card/index';
import styles from './style.module.css';
import Menu from '../../components/menu';
import CartArea from '../../components/cartArea/index';

export default function PageMenu() {
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [addItem, setAddItem] = useState([]);

  const onIncreaseItem = (name, price, id) => {
    setAddItem([...addItem, { name, price, id }]);
  };

  const onDecreaseItem = (id) => {
    addItem.filter((item, i) => item.id === id[i]);
  };

  useEffect(() => {
    getAllProducts(getUserTokenOnLocalStorage)
      .then((products) => {
        setAllProducts(products);
        const breakfastItens = products.filter((item) => item.type === 'breakfast');
        setSelectedProducts(breakfastItens);
      });
  }, []);

  function filterMenu(type) {
    const selectedMenu = allProducts.filter((item) => item.type === type);
    setSelectedProducts(selectedMenu);
  }

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
            onClick={() => filterMenu('breakfast')}
          >Café da manhã
          </button>
          <button
            className={styles['option-menu-button']}
            type="button"
            onClick={() => filterMenu('all-day')}
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
            selectedProducts.map(({ name, price, id }) => (
              <Card
                Name={name}
                Price={price}
                key={id}
                onIncrease={onIncreaseItem}
                onDecrease={onDecreaseItem(id)}
              />
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
            <CartArea arrItem={addItem} />
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
