import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./login.css";

export default function Login() {
  const { login, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Por favor completa ambos campos.");
        return;
      }
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <h2>Inicia sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
          Email
          <input
            className="login-form__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Ingresa tu email"
            disabled={loading}
          />
        </label>
        <label className="login-form__label">
          Contraseña
          <input
            className="login-form__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Ingresa tu contraseña"
            disabled={loading}
          />
        </label>
        {error && <p className="login-form__error">{error}</p>}
        <button className="login-form__button" type="submit" disabled={loading}>
          {loading ? "Iniciando sesión..." : "Entrar"}
        </button>
        <p className="login-form__p" onClick={() => navigate("/register")}>
          crear cuenta
        </p>
      </form>
    </div>
  );
}
