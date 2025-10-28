const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contador, setContador] = useState(1);

  const fecthProductoById = async (id) => {
    if (id) {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/api/productos/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
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
  }, [producto?.img]);

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
            src={producto.img}
            alt={producto.nombre}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.error("Error al cargar la imagen:", producto.img);
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
