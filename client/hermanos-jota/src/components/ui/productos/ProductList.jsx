import ProductCard from "./ProductCard";

const ProductList = ({ productos, verProductoDetalle, clase }) => {
  if (!productos) return <div></div>;
  return (
    <>
      {productos.length === 0 ? (
        <div className="sin-contenido" style={{ margin: "0 auto" }}>
          <p>No se encontraron productos</p>
        </div>
      ) : (
        productos.map((producto, i) => (
          <ProductCard
            key={i}
            producto={producto}
            verProductoDetalle={verProductoDetalle}
            clase={clase}
          />
        ))
      )}
    </>
  );
};
export default ProductList;
