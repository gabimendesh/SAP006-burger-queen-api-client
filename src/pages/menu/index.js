import React, { useEffect, useState } from 'react';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts, sendItens } from '../../services/index';
import { Card } from '../../components/card/index';
import styles from './style.module.css';
import Header from '../../components/header';
import CartArea from '../../components/cartArea/index';

export default function PageMenu() {
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartItem, setCartItems] = useState([]);
  const ItemsPrice = cartItem.reduce((a, c) => a + c.price * c.qtd, 0);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllProducts(getUserTokenOnLocalStorage())
      .then((products) => {
        setAllProducts(products);
        const breakfastItens = products.filter((item) => item.type === 'breakfast');
        setSelectedProducts(breakfastItens);
      });
  }, [getUserTokenOnLocalStorage()]);

  const [values, setValues] = useState({
    name: '',
    table: '',
    products: cartItem,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    sendItens(values.name, values.table, cartItem)
      .then((response) => {
        if (response) {
          setCartItems([]);
          setError('');
        }
      })
      .catch((errorMessage) => {
        setError(errorMessage.message);
      });
  };

  const onIncrease = (product) => {
    const exist = cartItem.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItem.map((item) => (item.id === product.id
        ? { ...exist, qtd: exist.qtd + 1 } : item)));
    } else {
      setCartItems([...cartItem, { ...product, qtd: 1 }]);
    }
  };

  const onDecrease = (product) => {
    const exist = cartItem.find((item) => item.id === product.id);
    if (exist.qtd === 1) {
      const itemToRemove = cartItem.filter((item) => item.id !== product.id);
      setCartItems(itemToRemove);
    } else {
      setCartItems(cartItem.map((item) => (item.id === product.id
        ? { ...exist, qtd: exist.qtd - 1 } : item)));
    }
  };

  const cancelAllOrder = () => {
    const product = cartItem.filter((item) => !item);
    setCartItems(product);
  };

  const cancelAnOrder = (product) => {
    const itemToRemove = cartItem.filter((item) => item.id !== product.id);
    setCartItems(itemToRemove);
  };

  function filterMenu(type) {
    const selectedMenu = allProducts.filter((item) => item.type === type);
    setSelectedProducts(selectedMenu);
  }

  return (
    <>
      <div className={styles['menu-container']}>
        <header className="header">
          <Header>Menu</Header>
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
            data-testid="client-name"
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nome do cliente"
            value={values.name}
            onChange={handleChange}
          />
          <input
            data-testid="client-table"
            className={styles['form-input']}
            type="number"
            name="table"
            placeholder="Nº da mesa"
            value={values.table}
            onChange={handleChange}
          />
        </div>
        <div className={styles['itens-container']}>
          {
            selectedProducts.map((product) => (

              <Card
                key={product.id}
                product={product}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
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
            <CartArea
              cartItem={cartItem}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              cancelAnOrder={cancelAnOrder}
              error={error}
            />
            <section className="resultOrders">
              <div className="total-price">
                <p>Total a pagar</p>
                <p>R$ {ItemsPrice}</p>
              </div>
              <div className="buttons">
                <button type="button" className="btn-confirm" onClick={handleSubmit}>Confirmar pedido</button>
                <button type="button" className="btn-cancel" onClick={cancelAllOrder}>Cancelar</button>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
