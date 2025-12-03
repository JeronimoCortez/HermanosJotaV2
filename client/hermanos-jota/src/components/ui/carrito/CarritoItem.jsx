import { Trash } from "lucide-react";

const CarritoItem = ({ item, editarCantidad, eliminarDelCarrito }) => {
  function modificarCantidad(cantidad) {
    if (cantidad >= 1) {
      editarCantidad(item.id, cantidad);
    }
  }

  return (
    <div className="carrito-item">
      <img src={item.producto?.imageUrl} alt={item.producto?.nombre} />
      <div className="carrito-info">
        <strong>{item.producto?.nombre}</strong>
        <br />
        <small>Unitario: ${item.producto?.precio}</small>
        <br />
        <strong>${item.producto?.precio * item.cantidad}</strong>
        <div className="cantidad-control">
          <button onClick={() => modificarCantidad(item.cantidad - 1)}>
            -
          </button>
          <span>{item.cantidad}</span>
          <button onClick={() => modificarCantidad(item.cantidad + 1)}>
            +
          </button>
        </div>
      </div>
      <button
        className="btn-eliminar"
        onClick={() => eliminarDelCarrito(item.id)}
      >
        <Trash/>
      </button>
    </div>
  );
};

export default CarritoItem;
