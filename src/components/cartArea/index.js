import React from 'react';
import CartItem from '../cartItem';

export default function CartArea({ arrItem }) {
  return (
    <section>
      {arrItem.map((item) => (
        <CartItem
          key={item.id}
          nome={item.name}
          preco={item.price}
        />
      ))}
    </section>
  );
}
