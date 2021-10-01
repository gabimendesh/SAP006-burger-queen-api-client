import React from 'react';
import CartItem from '../cartItem';

export default function CartArea({ arrItem }) {
  return (
    <section>
      {arrItem.map(({ id, name, price }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
        />
      ))}
    </section>
  );
}
