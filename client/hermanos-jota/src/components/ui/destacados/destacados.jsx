import { useContext } from "react";
import ProductList from "../productos/ProductList";
import { useNavigate } from "react-router-dom";
import "./destacados.css";
import { ProductosContext } from "../../../context/ProductosContext";

function ProductosDestacados() {
  const navigate = useNavigate();

  const irCatalogo = () => {
    navigate("/productos");
  };

  const { destacados } = useContext(ProductosContext);

  return (
    <section className="destacados">
      <h2>Productos Destacados</h2>
      <h5>
        Cada pieza ha sido cuidadosamente seleccionada por su calidad, diseño y
        funcionalidad
      </h5>
      <div className="grid">
        <ProductList productos={destacados} clase="destacados"></ProductList>
      </div>
      <button className="destacados-button" onClick={irCatalogo}>
        ver todos los productos
      </button>
    </section>
  );
}

export default ProductosDestacados;
