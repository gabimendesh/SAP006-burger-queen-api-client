import React from 'react';
import './style.css';

export default function CartItem({
  name, price, quantity, increase, decrease, cancelAnOrder,
}) {
  return (
    <div className="item-list">
      <p className="item-name">{name}</p>

      <div className="controller-container">
        <button
          className="remove-item-button"
          type="button"
          onClick={() => { decrease(name, price, quantity); }}
        >
          -
        </button>
        <p className="item-number">{quantity}</p>
        <button
          className="add-item-button"
          type="button"
          onClick={() => { increase(name, price, quantity); }}
        >
          +
        </button>
      </div>
      <p className="item-price">{price}</p>
      <button
        type="button"
        id="delete-order"
        className="trash"
        onClick={cancelAnOrder}
      >
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
}
