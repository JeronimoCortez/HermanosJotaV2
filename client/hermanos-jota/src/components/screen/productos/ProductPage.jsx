import { useState, useEffect } from "react";
import FiltrosSection from "../../ui/productos/FiltrosSection";
import ProductList from "../../ui/productos/ProductList";
import "./productos.css";
import HeroProductoContacto from "../../ui/hero-producto-contacto/HeroProductoContacto";
import { getProductos } from "../../../api/productosApi";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ loading }) => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productos, setProductos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
        setProductosFiltrados(data);
        console.log("Productos recibidos", productos);
      } catch (error) {
        console.error("Error al cargar productos", error);
      }
    };
    fetchProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos]);

  function onFiltrar(categoria, precio) {
    let filtrados = productos.filter((p) => {
      //filtrar por categoria
      const cat = categoria === "todos" || p.categoria === categoria;

      //filtrar por precio
      let pr = true;
      switch (precio) {
        case "bajo":
          pr = p.precio > 0 && p.precio <= 500;
          break;
        case "medio-bajo":
          pr = p.precio > 500 && p.precio <= 1000;
          break;
        case "medio-alto":
          pr = p.precio > 1000 && p.precio <= 1500;
          break;
        case "alto":
          pr = p.precio > 1500 && p.precio <= 2000;
          break;
        case "todos":
        default:
          pr = true;
      }
      return cat && pr;
    });
    setProductosFiltrados(filtrados);
  }

  function verProductoDetalle(id) {
    console.log(id);
    navigate(`/productos/${id}`);
  }

  return (
    <>
      <HeroProductoContacto
        title={"Nuestros productos"}
        subtitle={
          "Descubre nuestra coleccion completa de muebles premium para cada espacio de tu hogar"
        }
      />

      <main id="lista-productos" className="productos">
        <div className="productos-vista">
          <FiltrosSection onFiltrar={onFiltrar} />
          <p className="cantidad-productos">{`Mostrando ${productosFiltrados.length} productos`}</p>
          <section className="productos-list" id="productos-list">
            {loading ? (
              <p style={{ margin: "0 auto" }}>Cargando productos...</p>
            ) : (
              <ProductList
                productos={productosFiltrados}
                verProductoDetalle={verProductoDetalle}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
