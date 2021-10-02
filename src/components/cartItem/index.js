import React from 'react';

export default function CartItem({ name, price }) {
  return (
    <div className="item-list">
      <p className="item-name">{name}</p>
      <p className="item-number">3</p>
      <p className="item-price">{price}</p>
      <button type="button" id="delete-order" className="trash">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
}
