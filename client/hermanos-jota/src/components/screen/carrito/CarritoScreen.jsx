import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./carrito.css";
import { useCart } from "../../../context/CartContext";
import { useEffect } from "react";

const CarritoScreen = () => {
  const { carrito, vaciarCarrito } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("carrito:", carrito);
  }, [carrito]);

  const finalizarCompra = () => {
    toast.success("¡Compra finalizada con éxito! 🎉");

    vaciarCarrito();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const totalGeneral = carrito.reduce((acc, p) => {
    const cantidad = p.cantidad ?? (p.producto && p.producto.cantidad) ?? 0;
    const producto = p.producto ?? p;
    const precio = Number(producto.precio ?? 0);
    const subtotal = cantidad * precio;
    return acc + subtotal;
  }, 0);

  return (
    <div className="carrito__vista">
      <ToastContainer position="top-right" autoClose={2000} />

      <h2 className="carrito__vista-titulo">Mi compra</h2>

      <div>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          carrito.map((p, i) => {
            const cantidad = p.cantidad ?? (p.producto && p.producto.cantidad) ?? 0;
            const producto = p.producto ?? p;
            const nombre = producto.nombre ?? "Producto";
            const precio = Number(producto.precio ?? 0);
            const imgSrc = producto.imageUrl ?? producto.img ?? "/assets/generic-image.png";
            const subtotal = cantidad * precio;

            return (
              <div key={i} className="carrito__vista-tabla">
                <img src={imgSrc} alt={nombre} style={{ width: 120, height: 80, objectFit: "cover" }} />
                <p>{nombre}</p>
                <p>Cantidad: {cantidad}</p>
                <p>${precio.toFixed(2)} c/u</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
            );
          })
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Total: ${totalGeneral.toFixed(2)}</h3>
      </div>

      <button onClick={finalizarCompra} className="carrito__vista-btn" disabled={carrito.length === 0}>
        Finalizar compra
      </button>
    </div>
  );
};

export default CarritoScreen;
