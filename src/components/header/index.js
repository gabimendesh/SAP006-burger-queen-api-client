import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const { children } = props;
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">{children}</h3>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
      >
        <Link to="/" className="pedidos">
          <li>Pedidos Realizados</li>
        </Link>
        <Link to="/" className="logout">
          <li>Sair</li>
        </Link>
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
