/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Menu</h3>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="menu">
          <li>Menu</li>
        </Link>
        <Link to="/" className="pedidos">
          <li>Pedidos Realizados</li>
        </Link>
        <Link to="/" className="logout">
          <li>Logout</li>
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
