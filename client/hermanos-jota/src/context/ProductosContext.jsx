import { createContext, useState, useEffect } from "react";
import {
  getProductos,
  deleteProduct,
  editarProducto,
  createNewProduct,
} from "../api/productosApi";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
        console.log("Productos recibidos", data);
      } catch (error) {
        console.error("Error al cargar productos", error);
      }
    };
    fetchProductos();
  }, []);

  const destacados = productos.slice(0, 3);

  const crearProducto = async (producto) => {
    try {
      await createNewProduct(producto);
      setProductos([...productos, producto]);
    } catch (err) {
      console.log("Error al crear producto", err);
    }
  };

  const eliminarProducto = async (id) => {
    if (window.confirm("Estas seguro de borrar el producto")) {
      try {
        await deleteProduct(id);
        setProductos((prev) => prev.filter((p) => p._id !== id));
      } catch (err) {
        console.log("error al borrar producto", err);
      }
    }
  };

  const actualizarProducto = async (id, producto) => {
    if (window.confirm("Estas seguro de actualizar el producto")) {
      try {
        await editarProducto(id, producto);
        setProductos((prev) =>
          prev.map((p) => (p._id === id ? { ...p, ...producto } : p))
        );
      } catch (err) {
        console.log("error al actualiar producto", err);
      }
    }
  };

  const value = {
    productos,
    destacados,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
  };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
};
