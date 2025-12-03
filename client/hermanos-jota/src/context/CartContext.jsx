import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  const [openCarrito, setOpenCarrito] = useState(false);

  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (e) {
      console.error("Error leyendo carrito de localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } catch (e) {
      console.error("Error guardando carrito en localStorage:", e);
    }
  }, [carrito]);

  const total = useMemo(() => {
    return carrito.reduce((acc, producto) => acc + (producto.cantidad || 0), 0);
  }, [carrito]);

  function close() {
    setOpenCarrito(false);
  }

  function open() {
    setOpenCarrito(true);
  }

  function editarCantidad(id, cantidad) {
    setCarrito((prev) =>
      prev.map((p) => (p.id === id ? { ...p, cantidad } : p))
    );
  }

  function eliminarDelCarrito(producto) {
    setCarrito((prev) => prev.filter((el) => el.id !== producto));
  }

  function verCarrito() {
    close();
    navigate("/carrito");
  }

  function sumarAlCarrito(producto, cantidad) {
    setCarrito((prev) => {
      const found = prev.find(
        (el) =>
          (el.producto &&
            producto &&
            el.producto._id &&
            producto._id &&
            el.producto._id === producto._id) ||
          (el.producto &&
            producto &&
            el.producto.id &&
            producto.id &&
            el.producto.id === producto.id)
      );

      if (found) {
        return prev.map((el) => {
          const same =
            (el.producto &&
              producto &&
              el.producto._id &&
              producto._id &&
              el.producto._id === producto._id) ||
            (el.producto &&
              producto &&
              el.producto.id &&
              producto.id &&
              el.producto.id === producto.id);

          if (same) {
            return { ...el, cantidad: (el.cantidad || 0) + cantidad };
          }
          return el;
        });
      } else {
        const newId =
          prev.length > 0 ? Math.max(...prev.map((i) => i.id || 0)) + 1 : 1;
        return [...prev, { id: newId, producto, cantidad }];
      }
    });
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const value = {
    openCarrito,
    setOpenCarrito,
    carrito,
    setCarrito,
    total,
    close,
    open,
    editarCantidad,
    eliminarDelCarrito,
    verCarrito,
    sumarAlCarrito,
    vaciarCarrito,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return ctx;
};
