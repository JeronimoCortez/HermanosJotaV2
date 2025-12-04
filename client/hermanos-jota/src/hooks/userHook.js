import { useState, useEffect } from "react";
import {
  getUsuarios,
  createNuevoUsuario,
  deleteUsuario,
  editarUsuario,
  editarContraseña,
} from "../api/usuariosApi";

const useUserHook = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getUsuarios();
        setUsuarios(data);
        console.log("Usuarios recibidos", data);
      } catch (error) {
        console.error("Error al cargar usuarios", error);
      }
    };
    fetchUsuarios();
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
    if (window.confirm("Estas seguro de actualizar el usuario")) {
      try {
        await editarUsuario(id, usuario);
        setUsuarios((prev) =>
          prev.map((u) => (u._id === id ? { ...u, ...usuario } : u))
        );
      } catch (err) {
        console.log("error al actualizar producto", err);
      }
    }
  };

  const actualizarContraseña = async (id, nuevaContraseña) => {
    try {
      await editarContraseña(id, nuevaContraseña);
    } catch (err) {
      console.log("error al cambiar contraseña", err);
    }
  };

  return {
    usuarios,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario,
    actualizarContraseña,
  };
};

export default useUserHook;
