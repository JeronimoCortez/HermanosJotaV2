import { useState, useEffect, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [openCarrito, setOpenCarrito] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  function open() {
    setOpenCarrito(true);
  }

  function close() {
    setOpenCarrito(false);
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function sumarAlCarrito(producto, cantidad) {
    if (carrito.find((el) => el.producto._id === producto._id)) {
      setCarrito(
        carrito.map((el) =>
          el.producto.id === producto.id
            ? { ...el, cantidad: el.cantidad + cantidad }
            : el
        )
      );
    } else {
      setCarrito([...carrito, { id: carrito.length + 1, producto, cantidad }]);
    }
  }

  function editarCantidad(id, cantidad) {
    setCarrito(carrito.map((p) => (p.id === id ? { ...p, cantidad } : p)));
  }

  function eliminarDelCarrito(producto) {
    const nuevoCarrito = carrito.filter((el) => el.id !== producto);
    setCarrito(nuevoCarrito);
  }

  const total = carrito.reduce((total, producto) => {
    return total + producto.cantidad;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        openCarrito,
        open,
        close,
        carrito,
        sumarAlCarrito,
        editarCantidad,
        eliminarDelCarrito,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
