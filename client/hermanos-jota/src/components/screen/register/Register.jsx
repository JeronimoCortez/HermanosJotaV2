import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import useUserHook from "../../../hooks/userHook";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { crearUsuario } = useUserHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !email || !password) {
        setError("Por favor completa todos los campos.");
        return;
      }
      crearUsuario({ username, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="register-page">
      <h2>Registrate</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-form__label">
          Username
          <input
            className="register-form__input"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Ingresa un username"
          />
        </label>
        <label className="register-form__label">
          Email
          <input
            className="register-form__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Ingresa un email"
          />
        </label>
        <label className="register-form__label">
          Contraseña
          <input
            className="register-form__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Ingresa una contraseña"
          />
        </label>
        {error && <p className="register-form__error">{error}</p>}
        <button className="register-form__button" type="submit">
          crear
        </button>
      </form>
    </div>
  );
};

export default Register;
