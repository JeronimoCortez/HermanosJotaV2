import { useState } from "react";
import useUserHook from "../../../hooks/userHook";
import UserForm from "../user-form/UserForm";

const AdminUsuarios = () => {
  const [vista, setVista] = useState("usuarios");
  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null);
  const { usuarios, eliminarUsuario } = useUserHook();

  function handleEditBtn(p) {
    console.log(p);
    setVista("editar-usuario");
    setUsuarioParaEditar(p);
  }

  return (
    <div className="admin-pages-item">
      <div className="admin-pages-item-header">
        <h3>Gestión de Usuarios</h3>
        <span>Adminstra el estado de los usuarios</span>
        <button
          className="admin-pages-btn-agregar"
          onClick={() => setVista("crear-usuario")}
        >
          Agregar Usuario
        </button>
      </div>
      <div className="admin-pages-item-table-container">
        {vista === "usuarios" && (
          <table className="admin-pages-item-table">
            <thead>
              <tr>
                <td>Nombre</td>
                <td>Email</td>
                <td>Password</td>
                <td>Role</td>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  Acciones
                </td>
              </tr>
            </thead>
            <tbody>
              {usuarios.length === 0 ? (
                <tr>
                  <td className="admin-table-vacia">
                    No hay usuarios registrados
                  </td>
                </tr>
              ) : (
                <>
                  {usuarios.map((u, i) => (
                    <tr key={i}>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td>*********</td>
                      <td>{u.rol}</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="admin-table-btn-editar"
                          onClick={() => handleEditBtn(u)}
                        >
                          editar
                        </button>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="admin-table-btn-eliminar"
                          onClick={() => eliminarUsuario(u._id)}
                        >
                          eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        )}
        {vista === "crear-usuario" && <UserForm setVista={setVista} />}
        {vista === "editar-usuario" && (
          <UserForm setVista={setVista} usuarioParaEditar={usuarioParaEditar} />
        )}
      </div>
    </div>
  );
};

export default AdminUsuarios;
