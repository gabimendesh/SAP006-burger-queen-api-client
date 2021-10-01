import React from 'react';

export default function CartItem({ name, price, id }) {
  return (
    <div className="item-list" key={id}>
      <p className="item-name">{name}</p>
      <p className="item-number" />
      <p className="item-price">{price}</p>
      <button type="button" id="delete-order" className="trash">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
}
