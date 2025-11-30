import { useState } from "react";
import useUserHook from "../../../hooks/userHook";
import "./userForm.css";

const INITIAL_FORM = {
  username: "",
  email: "",
  password: "",
  rol: "user",
};

const UserForm = ({ setVista, usuarioParaEditar }) => {
  const [form, setForm] = useState(usuarioParaEditar || INITIAL_FORM);
  const [error, setError] = useState(null);

  const { crearUsuario, actualizarUsuario } = useUserHook();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.username | !form.email | !form.password) {
      setError("Debes completar todos los campos");
    }

    if (usuarioParaEditar) {
      actualizarUsuario(usuarioParaEditar._id, form);
    } else {
      crearUsuario(form);
      setForm(INITIAL_FORM);
    }

    setTimeout(() => {
      setVista("usuarios");
    }, 3000);
  }

  return (
    <form className="login-form-user" onSubmit={handleSubmit}>
      <h3>{usuarioParaEditar ? "Editar Usuario" : "Crear Usuario"}</h3>
      <label className="login-form-user__label">
        Username
        <input
          className="login-form-user__input"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Ingresa tu username"
        />
      </label>
      <label className="login-form-user__label">
        Email
        <input
          className="login-form-user__input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
        />
      </label>
      <label className="login-form-user__label">
        <select
          className="login-form-user__select"
          name="rol"
          value={form.rol}
          onChange={handleChange}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </label>
      {!usuarioParaEditar && (
        <label className="login-form-user__label">
          Contraseña
          <input
            className="login-form-user__input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
          />
        </label>
      )}
      {error && <p className="login-form-user__error">{error}</p>}
      <button className="login-form-user__button" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default UserForm;
