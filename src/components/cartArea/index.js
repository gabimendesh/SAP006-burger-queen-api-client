import React from 'react';
import CartItem from '../cartItem';

export default function CartArea({ arrItem }) {
  return (
    <section>
      {arrItem.map(({
        name, price, id, quantity,
      }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
          quantity={quantity}
        />
      ))}
    </section>
  );
}
