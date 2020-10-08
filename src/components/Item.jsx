import React from "react";
import Styles from "./Item.module.css";

const NoHayElementos = () => (
  <div className={Styles.vacio}>
    <p> No hay elementos en el carrito</p>
  </div>
);

const ElementosAgregados = ({ agregados }) => (
  <div className={Styles.success}>
    <p> {agregados} elementos agregados </p>
  </div>
);

const NoHaySuficientesElementos = ({ agregados }) => (
  <div className={Styles.error}>
    <p> No hay suficientes productos. Maximo {agregados} </p>
  </div>
);

function Item({ nombre, disponibles }) {
  const [cantidad, setCantidad] = React.useState("0");
  const [error, setError] = React.useState(false);

  const addToCart = ({ cantidad }) => {
    cantidad >= disponibles ? setError(true) : setError(false);
  };

  return (
    <>
      <div className={Styles.item}>
        <div className={Styles.nombre}>
          {nombre} (Disponibles:{disponibles})
        </div>

        <div className={Styles.seleccionador}>
          <input
            type="number"
            onChange={(e) => setCantidad(e.target.value)}
            value={cantidad}
          />
          <button onClick={() => addToCart({ cantidad })}>Agregar</button>
        </div>

        {error ? (
          <NoHaySuficientesElementos agregados={disponibles} />
        ) : cantidad === "0" ? (
          <NoHayElementos />
        ) : (
          <ElementosAgregados agregados={cantidad} />
        )}
      </div>
    </>
  );
}

export default Item;
