import { React, useState } from 'react';
import Card from '../../components/card/index';
import styles from './style.module.css';
import Menu from '../../components/menu';

export default function PageMenu() {
  const [isMobile, setIsMobile] = useState(false);
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
            placeholder="Cliente"
          />
          <input
            className={styles['form-input']}
            type="text"
            name="name"
            placeholder="Nº da mesa"
          />
        </div>
        <Card />
      </div>
      <footer>
        <button
          type="button"
          onClick={() => setIsMobile(false)}
        > Pedidos
        </button>
        <div>
          <div className={isMobile ? 'open-orders' : 'close-orders'}>
            <section>
              <p>Item</p>
              <p>Quantidade</p>
              <p>Preço</p>
            </section>
            <div>
              <p>Hamburguer Simples</p>
              <p>2</p>
              <p>R$ 15,00</p>
              <button type="button" id="delete-order" className="trash">
                <i className="fas fa-trash-alt" />
              </button>
            </div>
            <div className="resultOrders">
              <p>Total a pagar</p>
              <button type="button" className="btn-confirm">Confirmar pedido</button>
              <button type="button" className="btn-cancel">Cancelar</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
