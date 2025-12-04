const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/productos";

export const getProductos = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de productos");
  }
  const data = await response.json();
  return data;
};

export const getProductoById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (response.status === 404) {
    throw new Error("Producto no encontrado (404)");
  }
  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }

  const data = await response.json();
  return data;
};

export const createNewProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error al crear producto");
  }

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al borrar producto");
  }

  return response.data;
};

export const editarProducto = async (id, productoActualizado) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productoActualizado),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar producto");
  }

  return response.data;
};
