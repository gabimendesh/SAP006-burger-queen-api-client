import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { clearUserTokenOnLocalStorage } from '../../services/localStorage';
import './header.css';

export default function Header(props) {
  const { children } = props;
  const [isMobile, setIsMobile] = useState(false);
  const history = useHistory();
  return (
    <nav className="navbar">
      <h3 className="logo">{children}</h3>
      <div
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
      >
        <Link to="/pedidos" className="pedidos">
          Pedidos Finalizados
        </Link>
        <button
          type="button"
          className="logout"
          onClick={() => {
            history.push('/');
            clearUserTokenOnLocalStorage();
          }}
        >
          Sair
        </button>
      </div>
      <button
        type="button"
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </button>
    </nav>
  );
}
