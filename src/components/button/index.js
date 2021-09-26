import React from 'react';
import './style.css';

export default function Button(props) {
  const { children, variant } = props;
  const classes = `button ${variant}`;

  return (
    <>
      <button
        data-testid="button"
        type="submit"
        className={classes}
      >
        {children}
      </button>
    </>
  );
}
