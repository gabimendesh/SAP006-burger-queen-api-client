import React from 'react';
import CartItem from '../cartItem';

export default function CartArea({ arrItem }) {
  return (
    <section>
      {arrItem.map(({ name, price, id }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
        />
      ))}
    </section>
  );
}
