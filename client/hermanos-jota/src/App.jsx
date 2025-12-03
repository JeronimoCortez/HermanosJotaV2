import "./App.css";
import ProductPage from "./components/screen/productos/ProductPage";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import Carrito from "./components/ui/carrito/Carrito";
import HomePage from "./components/screen/home-page/home-page";
import CarritoScreen from "./components/screen/carrito/CarritoScreen";
import Contacto from "./components/screen/contacto/Contacto";
import DetalleProducto from "./components/screen/detalle-producto/DetalleProducto";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/screen/login/Login";
import AdminPage from "./components/screen/admin/AdminPage";
import Register from "./components/screen/register/Register";
import UserPage from "./components/screen/user/UserPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrito />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductPage />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route
          path="/perfil"
          element={<ProtectedRoute>{<UserPage />}</ProtectedRoute>}
        />

        <Route
          path="/admin"
          element={<ProtectedRoute>{<AdminPage />}</ProtectedRoute>}
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
