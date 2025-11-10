import { useNavigate } from "react-router-dom";

const ProductCard = ({ producto, clase }) => {
  const navigate = useNavigate();

  function verProductoDetalle() {
    navigate(`/productos/${producto._id}`);
  }

  return (
    <article
      className={
        clase === "destacados" ? "productos-item-destacados" : "productos-item"
      }
      onClick={verProductoDetalle}
    >
      <img src={`${producto.imageUrl}`} alt={producto.nombre} />
      <div className="productos-descripcion">
        <h3>{producto.nombre}</h3>
        <p>{`$${producto.precio}`}</p>
        <button className="ver-btn">Comprar</button>
      </div>
    </article>
  );
};

export default ProductCard;
