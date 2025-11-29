const BASE_URL = "http://localhost:3000/api/register";

export const getUsuarios = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de usuarios");
  }
  const data = await response.json();
  return data;
};

export const createNuevoUsuario = async (usuario) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    throw new Error("Error al crear usuario");
  }

  return response.data;
};

export const deleteUsuario = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al borrar usuario");
  }

  return response.data;
};

export const editarUsuario = async (id, usuarioAcutalizado) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuarioAcutalizado),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar usuario");
  }

  return response.data;
};
