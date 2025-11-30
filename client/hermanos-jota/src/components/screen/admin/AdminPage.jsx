import { useState } from "react";
import AdminProductos from "../../ui/admin/AdminProductos";
import AdminUsuarios from "../../ui/admin/AdminUsuarios";
import "./admin.css";

const AdminPage = () => {
  const [vista, setVista] = useState("productos");
  return (
    <main className="admin-page">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <h1>Panel de Administración</h1>
          <span>Gestión de usuarios, productos y stock</span>
        </div>
        <section className="panel-control">
          <div className="panel-control-links">
            <span
              className={
                vista === "productos"
                  ? "panel-control-link panel-active"
                  : "panel-control-link"
              }
              onClick={() => setVista("productos")}
            >
              Productos
            </span>
            <span
              className={
                vista === "usuarios"
                  ? "panel-control-link panel-active"
                  : "panel-control-link"
              }
              onClick={() => setVista("usuarios")}
            >
              Usuarios
            </span>
          </div>
          <div className="admin-pages">
            {vista === "productos" && <AdminProductos />}
            {vista === "usuarios" && <AdminUsuarios />}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPage;
