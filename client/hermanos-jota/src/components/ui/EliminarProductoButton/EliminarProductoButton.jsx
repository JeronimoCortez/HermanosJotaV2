const EliminarProductoButton = ({ id }) => {
  const eliminarProducto = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/productos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // usar api de alerta exito
      } else {
        // usar api de alerta error
      }
    } catch (error) {
      // usar api de alerta error
    }
  };
  return (
    <div>
      <button onClick={eliminarProducto}>
        <Trash />
      </button>
    </div>
  );
};

export default EliminarProductoButton;
