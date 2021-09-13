import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> Você clicou {count} vezes </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Somar
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Subtrair
      </button>
    </div>
  );
}

export default Counter;
