import React from "react";
import Item from "./components/Item";
import "./App.css";

const ITEMS = [
  { nombre: "Galletas", disponibles: 100 },
  { nombre: "Revistas", disponibles: 50 },
  { nombre: "Refrescos", disponibles: 10 },
];

function App() {
  return (
    <>
      <div className="lista">
        {ITEMS.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            disponibles={item.disponibles}
          />
        ))}
      </div>
    </>
  );
}

export default App;
