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
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
      >
        <Link to="/pedidos" className="pedidos">
          <li>Pedidos Finalizados</li>
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
      </ul>
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
