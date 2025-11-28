import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // <--- IMPORTANTE
import "./carrito.css";

const CarritoScreen = () => {
  const productos = [
    { img: null, nombre: "Producto 1", cantidad: 2, precio: 100 },
    { img: null, nombre: "Producto 2", cantidad: 1, precio: 250 },
    { img: null, nombre: "Producto 3", cantidad: 3, precio: 75 },
    { img: null, nombre: "Producto 4", cantidad: 1, precio: 500 },
  ];

  const navigate = useNavigate();

  const finalizarCompra = () => {
    toast.success("¡Compra finalizada con éxito! 🎉");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="carrito__vista">
      <ToastContainer position="top-right" autoClose={2000} />

      <h2 className="carrito__vista-titulo">Mi compra</h2>

      <div>
        {productos.map((p, i) => (
          <div key={i} className="carrito__vista-tabla">
            <img src={p.img || "/assets/generic-image.png"} alt={p.nombre} />
            <p>{p.nombre}</p>
            <p>Cantidad: {p.cantidad}</p>
            <p>${p.precio} c/u</p>
            <p>${p.cantidad * p.precio}</p>
          </div>
        ))}
      </div>

      <button onClick={finalizarCompra} className="carrito__vista-btn">
        Finalizar compra
      </button>
    </div>
  );
};

export default CarritoScreen;
