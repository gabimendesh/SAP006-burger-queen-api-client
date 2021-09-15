import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Button(props) {
  const { children, variant } = props;
  const classes = `button ${variant}`;

  return (
    <>
      <Link to="/cadastro" className={classes}>
        {children}
      </Link>
    </>
  );
}
