import AdminProductos from "../../ui/admin/AdminProductos";
import AdminUsuarios from "../../ui/admin/AdminUsuarios";
import "./admin.css";

const AdminPage = () => {
  return (
    <main className="admin-page">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <h1>Panel de Administración</h1>
          <span>Gestión de usuarios, productos y stock</span>
        </div>
        <section className="panel-control">
          <div className="panel-control-links">
            <span className="panel-control-link">Usuarios</span>
            <span className="panel-control-link">Productos</span>
          </div>
          <div className="admin-pages">
            <AdminProductos />
            <AdminUsuarios />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPage;
