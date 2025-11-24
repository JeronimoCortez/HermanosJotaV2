import "./carrito.css";
import CarritoItem from "./CarritoItem";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Carrito = () => {
  const {
    openCarrito,
    carrito,
    close,
    total,
    eliminarDelCarrito,
    editarCantidad,
  } = useContext(CartContext);

  return (
    <div
      id="ventana-carrito"
      className={openCarrito ? "ventana open" : "ventana"}
    >
      <div className="ventana-header">
        <h2>Mi compra</h2>
        <span
          id="cerrar-ventana"
          className="cerrar-btn"
          style={{ cursor: "pointer" }}
          onClick={close}
        >
          X
        </span>
      </div>
      <div className="ventana-contenido" id="items-carrito">
        {carrito.map((item, i) => (
          <CarritoItem
            key={i}
            item={item}
            editarCantidad={editarCantidad}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        ))}
      </div>
      <div className="ventana-footer">
        <h3>
          Total: <span id="total-carrito">{total}</span>
        </h3>
        <button className="btn-pago">Ir al pago</button>
      </div>
    </div>
  );
};

export default Carrito;
