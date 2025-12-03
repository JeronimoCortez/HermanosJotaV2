import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../../api/productosApi";
import Contador from "../../ui/contador/Contador";
import "./DetalleProducto.css";
import { useCart } from "../../../context/CartContext";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contador, setContador] = useState(1);

  const { sumarAlCarrito } = useCart();

  const fecthProductoById = async (id) => {
    if (id) {
      setLoading(true);
      const data = await getProductoById(id);
      console.log(data);

      setProducto(data);
      setLoading(false);
      setImageLoaded(false);
    } else {
      setProducto(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect ejecutado, id:", id);
    fecthProductoById(id);
  }, [id]);

  useEffect(() => {
    setImageLoaded(false);
    let timer = setTimeout(() => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [producto?.imageUrl]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!id) {
    console.log("Render: No hay id");
    return <p>Debe especificar id</p>;
  }
  if (!producto) {
    return <p>El producto no esta dispnible</p>;
  }

  return (
    <>
      <div className="detalle-producto">
        <div className="producto-info-container">
          {!imageLoaded && <p>Cargando imagen...</p>}
          <img
            className="producto-img"
            src={producto.imageUrl}
            alt={producto.nombre}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.error("Error al cargar la imagen:", producto.imageUrl);
              setImageLoaded(true);
            }}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
          <div className="producto-info">
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <div className="cantidad">
              <p>Cantidad: </p>
              <Contador
                max={producto.stock}
                contador={contador}
                setContador={setContador}
              />
            </div>

            <button
              className="btn-compra"
              onClick={() => sumarAlCarrito(producto, contador)}
            >
              Comprar
            </button>
          </div>
        </div>
        <div className="producto-caracteristicas">
          <h4 className="caracteristicas-title">Caracteristicas</h4>
          <ul>
            {producto.caracteristicas.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
