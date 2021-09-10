import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < 5) setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const add2cart = () => {
    onAdd(count);
  };
  return (
    <div>
      <h3>Contador</h3>
      <label>{count}</label>
      <br />
      <button onClick={restar}> - </button>
      <button onClick={add2cart}> Agregar a tu carro </button>
      <button onClick={sumar}> + </button>
    </div>
  );
};
export default ItemCount;
