import { useState, useEffect } from "react";
import {
  getUsuarios,
  createNuevoUsuario,
  deleteUsuario,
  editarUsuario,
} from "../api/usuariosApi";

const useUserHook = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getUsuarios();
        setUsuarios(data);
        console.log("Usuarios recibidos", data);
      } catch (error) {
        console.error("Error al cargar usuarios", error);
      }
    };
    fetchProductos();
  }, []);

  const crearUsuario = async (usuario) => {
    try {
      await createNuevoUsuario(usuario);
      setUsuarios([...usuarios, usuario]);
    } catch (err) {
      console.log("Error al crear usuario", err);
    }
  };

  const eliminarUsuario = async (id) => {
    if (window.confirm("Estas seguro de borrar el usuario")) {
      try {
        await deleteUsuario(id);
        setUsuarios((prev) => prev.filter((u) => u._id !== id));
      } catch (err) {
        console.log("error al borrar usuario", err);
      }
    }
  };

  const actualizarUsuario = async (id, usuario) => {
    if (window.confirm("Estas seguro de actualizar el producto")) {
      try {
        await editarUsuario(id, usuario);
        const data = await getUsuarios();
        setUsuarios(data);
      } catch (err) {
        console.log("error al actualiar producto", err);
      }
    }
  };

  return { usuarios, crearUsuario, eliminarUsuario, actualizarUsuario };
};

export default useUserHook;
