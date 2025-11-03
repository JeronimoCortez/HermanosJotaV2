import React, { useState, useEffect } from "react";
import { getProductos } from "../../../api/productosApi";
import ProductList from "../productos/ProductList";
import { useNavigate } from "react-router-dom";
import "./destacados.css";

function ProductosDestacados() {
  const navigate = useNavigate();

  const irCatalogo = () => {
    navigate("/productos");
  };
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        const destacados = data.slice(0, 3);
        setProductos(destacados);
        console.log("Productos recibidos", data);
      } catch (error) {
        console.error("Error al cargar productos", error);
      }
    };
    fetchProductos();
  }, []);
  return (
    <section className="destacados">
      <h2>Productos Destacados</h2>
      <h5>
        Cada pieza ha sido cuidadosamente seleccionada por su calidad, diseño y
        funcionalidad
      </h5>
      <div className="grid">
        <ProductList productos={productos} clase="destacados"></ProductList>
      </div>
      <button className="destacados-button" onClick={irCatalogo}>
        ver todos los productos
      </button>
    </section>
  );
}

export default ProductosDestacados;
