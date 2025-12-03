import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./ProtectedRoute.css";

const AdminProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div role="status" aria-busy="true" className="container-loading">
        Cargando...
      </div>
    );
  }

  if (currentUser.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
