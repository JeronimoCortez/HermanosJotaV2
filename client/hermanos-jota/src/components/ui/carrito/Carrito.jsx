import { Trash } from "lucide-react";
import "./carrito.css";
import CarritoItem from "./CarritoItem";
import { useCart } from "../../../context/CartContext";

const Carrito = () => {
  const {
    openCarrito,
    carrito,
    total,
    close,
    editarCantidad,
    eliminarDelCarrito,
    verCarrito,
    vaciarCarrito,
  } = useCart();

  const token = localStorage.getItem("authToken");

  if (token) {
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
              key={
                item.id ??
                (item.producto && (item.producto._id ?? item.producto.id)) ??
                i
              }
              item={item}
              editarCantidad={editarCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          ))}
          {carrito.length > 0 && (
            <button
              className="btn-vaciar"
              onClick={vaciarCarrito}
              type="button"
            >
              <Trash /> Vaciar carrito
            </button>
          )}
        </div>

        <div className="ventana-footer">
          <h3>
            Total: <span id="total-carrito">{total}</span>
          </h3>
          <button
            className="btn-pago"
            onClick={verCarrito}
            disabled={carrito.length === 0}
          >
            Ir al pago
          </button>
        </div>
      </div>
    );
  } else {
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

        <div className="ventana-contenido">
          <p>
            Debe iniciar sesion para acceder al carrito{" "}
            <a href="/login">Iniciar Sesion</a>
          </p>
        </div>
      </div>
    );
  }
};

export default Carrito;
