import { useState } from "react";
const Counter = () => {
  /*no puede ser let porque no percibe cuando cambia el valor, tiene que ser hook(tener estados)*/
  const [counter, setCounter] = useState(1);

  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
    else alert("no hay productos para restar");
  };
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
    </div>
  );
};

export default Counter;
