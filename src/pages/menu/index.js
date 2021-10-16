import React, { useEffect, useState } from 'react';
import { getUserTokenOnLocalStorage } from '../../services/localStorage';
import { getAllProducts, sendItens } from '../../services/index';
import { Card } from '../../components/card/index';
import styles from './style.module.css';
import Header from '../../components/header';
import CartArea from '../../components/cartArea/index';
import useForm from '../../services/useForm';
import Input from '../../components/input';

export default function PageMenu() {
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const ItemsPrice = cartItems.reduce((a, c) => a + c.price * c.qtd, 0);
  const [error, setError] = useState('');
  const token = getUserTokenOnLocalStorage();
  const {
    handleClientChange, client,
  } = useForm();

  const getProducts = () => {
    getAllProducts(token).then((products) => {
      setAllProducts(products);
      const breakfastItens = products.filter((item) => item.type === 'breakfast');
      setSelectedProducts(breakfastItens);
    });
  };

  useEffect(() => {
    getProducts();
  }, [token]);

  const handleSubmit = () => {
    sendItens(client.name, client.table, cartItems)
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
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) => (item.id === product.id ? { ...exist, qtd: exist.qtd + 1 } : item)),
      );
    } else {
      setCartItems([...cartItems, { ...product, qtd: 1 }]);
    }
  };

  const onDecrease = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qtd === 1) {
      const itemToRemove = cartItems.filter((item) => item.id !== product.id);
      setCartItems(itemToRemove);
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === product.id ? { ...exist, qtd: exist.qtd - 1 } : item)),
      );
    }
  };

  const cancelAllOrder = () => {
    const product = cartItems.filter((item) => !item);
    setCartItems(product);
  };

  const cancelAnOrder = (product) => {
    const itemToRemove = cartItems.filter((item) => item.id !== product.id);
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
          >
            Café da manhã
          </button>
          <button
            className={styles['option-menu-button']}
            type="button"
            onClick={() => filterMenu('all-day')}
          >
            Menu Principal
          </button>
        </div>
        <div className={styles['client-data']}>
          <Input
            data-testid="client-name"
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nome do cliente"
            value={client.name}
            onChange={handleClientChange}
          />
          <Input
            data-testid="client-table"
            className={styles['form-input']}
            type="number"
            name="table"
            placeholder="Nº da mesa"
            value={client.table}
            onChange={handleClientChange}
          />
        </div>
        <div className={styles['itens-container']}>
          {selectedProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </div>
        <div className={styles.footer}>
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
              cartItems={cartItems}
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
                <button
                  type="button"
                  className="btn-confirm"
                  onClick={handleSubmit}
                >
                  Confirmar pedido
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={cancelAllOrder}
                >
                  Cancelar
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
