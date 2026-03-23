import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur actuel : {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Ajouter</button>
    </div>
  );
}

export default Counter;