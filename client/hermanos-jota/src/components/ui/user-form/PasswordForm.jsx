import { useState } from "react";
import useUserHook from "../../../hooks/userHook";
import "./userForm.css";

const PasswordForm = ({ id, setVista }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const { actualizarContraseña } = useUserHook();

  console.log(confirmPassword);

  function handleSubmit(e) {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Debes completar ambos campos");
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no son iguales");
    }

    try {
      actualizarContraseña(id, confirmPassword);
    } catch (err) {
      console.log("error cambiando la contraseña", err);
    } finally {
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        setVista("perfil");
      }, 3000);
    }
  }

  return (
    <form className="login-form-user" onSubmit={handleSubmit}>
      <h3>Cambiar Contraseña</h3>
      <label className="login-form-user__label">
        Nueva contraseña
        <input
          className="login-form-user__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa una contraseña"
        />
      </label>
      <label className="login-form-user__label">
        Confirmar contraseña
        <input
          className="login-form-user__input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirma contraseña"
        />
      </label>
      {error && <p className="login-form-user__error">{error}</p>}
      <button className="login-form-user__button" type="submit">
        cambiar
      </button>
    </form>
  );
};

export default PasswordForm;
