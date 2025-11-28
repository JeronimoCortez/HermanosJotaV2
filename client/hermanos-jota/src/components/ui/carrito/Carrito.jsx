import { Trash } from "lucide-react";
import "./carrito.css";
import CarritoItem from "./CarritoItem";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Carrito = ({
  openCarrito,
  setOpenCarrito,
  carrito,
  setCarrito,
  total,
}) => {
  function close() {
    setOpenCarrito(false);
  }

  const navigate = useNavigate()

  function editarCantidad(id, cantidad) {
    setCarrito(carrito.map((p) => (p.id === id ? { ...p, cantidad } : p)));
  }

  function eliminarDelCarrito(producto) {
    const nuevoCarrito = carrito.filter((el) => el.id !== producto);
    setCarrito(nuevoCarrito);
  }

  function verCarrito(){
    navigate("/carrito")
  }

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
              key={i}
              item={item}
              editarCantidad={editarCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          ))}
          {carrito.length > 0 && (
            <button className="btn-vaciar">
              <Trash /> Vaciar carrito
            </button>
          )}
        </div>
        <div className="ventana-footer">
          <h3>
            Total: <span id="total-carrito">{total}</span>
          </h3>
          <button className="btn-pago" onClick={verCarrito}>Ir al pago</button>
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
        <p>
          Debe iniciar sesion para acceder al carrito{" "}
          <a href="/login">Iniciar Sesion</a>
        </p>
      </div>
    );
  }
};

export default Carrito;
