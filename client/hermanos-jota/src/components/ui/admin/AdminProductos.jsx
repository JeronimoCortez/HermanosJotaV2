import { useContext, useState } from "react";
import { ProductosContext } from "../../../context/ProductosContext";
import NewProductForm from "../../ui/nuevo-producto/NewProductForm";

const AdminProductos = () => {
  const [vista, setVista] = useState("productos");
  const [productoParaEditar, setProductoParaEditar] = useState(null);
  const { productos, eliminarProducto } = useContext(ProductosContext);

  function handleEditBtn(p) {
    setVista("editar-producto");
    setProductoParaEditar(p);
  }

  return (
    <div className="admin-pages-item">
      <div className="admin-pages-item-header">
        <h3>Gestión de Stock</h3>
        <span>Controla el inventario de productos</span>
        <button
          className="admin-pages-btn-agregar"
          onClick={() => setVista("crear-producto")}
        >
          Agregar Producto
        </button>
      </div>
      <div className="admin-pages-item-table-container">
        {vista === "productos" && (
          <table className="admin-pages-item-table">
            <thead>
              <tr>
                <td colSpan="2">Producto</td>
                <td>Precio</td>
                <td>Categoría</td>
                <td>Stock</td>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  Acciones
                </td>
              </tr>
            </thead>
            <tbody>
              {productos.length === 0 ? (
                <tr>
                  <td colSpan="7" className="admin-table-vacia">
                    No hay productos registrados
                  </td>
                </tr>
              ) : (
                <>
                  {productos.map((p, i) => (
                    <tr key={i}>
                      <td colSpan="1">
                        <img
                          style={{ width: "38px" }}
                          src={p.imageUrl}
                          alt={p.nombre}
                        />
                      </td>
                      <td colSpan="1">{p.nombre}</td>
                      <td>{p.precio}</td>
                      <td>{p.categoria}</td>
                      <td>{p.stock}</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="admin-table-btn-editar"
                          onClick={() => handleEditBtn(p)}
                        >
                          editar
                        </button>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="admin-table-btn-eliminar"
                          onClick={() => eliminarProducto(p._id)}
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
        {vista === "crear-producto" && <NewProductForm setVista={setVista} />}
        {vista === "editar-producto" && (
          <NewProductForm
            setVista={setVista}
            productoParaEditar={productoParaEditar}
          />
        )}
      </div>
    </div>
  );
};

export default AdminProductos;
