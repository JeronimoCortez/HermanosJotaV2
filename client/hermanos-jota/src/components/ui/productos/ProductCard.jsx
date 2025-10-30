const ProductCard = ({ producto, verProductoDetalle, clase }) => {
  return (
    <article
      className={
        clase === "destacados" ? "productos-item-destacados" : "productos-item"
      }
      onClick={() => verProductoDetalle(producto._id)}
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
