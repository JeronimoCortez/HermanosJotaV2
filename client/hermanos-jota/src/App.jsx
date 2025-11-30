import "./App.css";
import ProductPage from "./components/screen/productos/ProductPage";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import Carrito from "./components/ui/carrito/Carrito";
import HomePage from "./components/screen/home-page/home-page";
import CarritoScreen from "./components/screen/carrito/CarritoScreen";
import Contacto from "./components/screen/contacto/Contacto";
import DetalleProducto from "./components/screen/detalle-producto/DetalleProducto";
import NewProductPage from "./components/screen/nuevo-producto/NewProductPage";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useCart } from "./context/CartContext";

function App() {

  const {
    openCarrito,
    setOpenCarrito,
    carrito,
    setCarrito,
    total,
    sumarAlCarrito,
  } = useCart();

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
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route
          path="/productos/:id"
          element={<DetalleProducto sumarAlCarrito={sumarAlCarrito} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin/crear-producto" element={<NewProductPage />} />

        {/* Rutas protegidas */}
        <Route
          path="/perfil"
          element={<ProtectedRoute>{/* <Perfil /> */}</ProtectedRoute>}
        />

        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <CarritoScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
