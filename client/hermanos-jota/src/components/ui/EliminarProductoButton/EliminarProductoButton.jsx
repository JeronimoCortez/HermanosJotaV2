import { Trash } from "lucide-react";
import { deleteProduct } from "../../../api/productosApi";
import "./EliminarProductoButton.css";
import { useNavigate } from "react-router-dom";
const EliminarProductoButton = ({ id }) => {
  const navigate = useNavigate();

  const eliminarProducto = async () => {
    if (window.confirm("Estas seguro de borrar el producto")) {
      deleteProduct(id);
      navigate("/productos");
    }
  };

  return (
    <div className="container-button">
      <button className="delete-button" onClick={eliminarProducto}>
        <Trash />
      </button>
    </div>
  );
};

export default EliminarProductoButton;
