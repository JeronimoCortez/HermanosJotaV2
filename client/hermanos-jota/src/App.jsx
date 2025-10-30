import "./App.css";
import ProductPage from "./components/screen/productos/ProductPage";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import Carrito from "./components/ui/carrito/Carrito";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [openCarrito, setOpenCarrito] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function sumarAlCarrito(producto, cantidad) {
    if (carrito.find((el) => el.producto.id === producto.id)) {
      setCarrito(
        carrito.map((el) =>
          el.producto.id === producto.id
            ? { ...el, cantidad: el.cantidad + cantidad }
            : el
        )
      );
    } else {
      setCarrito([...carrito, { id: carrito.length + 1, producto, cantidad }]);
    }
  }

  const total = carrito.reduce((total, producto) => {
    return total + producto.cantidad;
  }, 0);

  return (
    <div className="App">
      <Navbar setOpenCarrito={setOpenCarrito} total={total} />
      <Carrito
        openCarrito={openCarrito}
        setOpenCarrito={setOpenCarrito}
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
      />
      <Routes>
        <Route path="/" element={"Página de inico"} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/productos/:id" element={"Producto Detalle"} />
        <Route path="/contacto" element={"Contaco"} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
