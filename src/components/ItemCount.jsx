import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [cambiarBoton, setcambiarBoton] = useState (true)

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const add2cart = () => {
    onAdd(count);
    setcambiarBoton(false)
  };
  return (
    <div>
      <h3>Contador</h3>
      
      
      <button onClick={restar}> - </button>
      <label>{count}</label>
      <button onClick={sumar}> + </button>
      <br />
      { cambiarBoton ? 
        <button onClick={add2cart}> Agregar a tu carro </button>
        :
        <div>
          <Link to={'/'}><button > Continuar compra </button></Link>
          
          <Link to={'/Cart'}><button >Cerrar compra </button></Link>
        </div>
        
      }
      
     
    </div>
  );
};
export default ItemCount;
