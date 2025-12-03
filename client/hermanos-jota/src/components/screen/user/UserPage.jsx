import { useContext, useState } from "react";
import "./userPage.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PasswordForm from "../../ui/user-form/PasswordForm";

const UserPage = () => {
  const [vista, setVista] = useState("perfil");
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="user-page">
      <h2>Información del usuario</h2>
      {vista === "perfil" && (
        <div className="user-card">
          <label className="user-card__label">
            Username
            <input
              className="user-card__input"
              type="text"
              placeholder={currentUser.username}
              disabled
            />
          </label>
          <label className="user-card__label">
            Email
            <input
              className="user-card__input"
              type="email"
              placeholder={currentUser.email}
              disabled
            />
          </label>
          <label className="user-card__label">
            Rol
            <input
              className="user-card__input"
              type="text"
              placeholder={currentUser.rol}
              disabled
            />
          </label>
          {currentUser.rol === "admin" && (
            <p className="user-card__p" onClick={() => navigate("/admin")}>
              ver panel de administrador
            </p>
          )}
          <p
            className="user-card__p"
            onClick={() => setVista("cambiar-contraseña")}
          >
            cambiar contraseña
          </p>
        </div>
      )}
      {vista === "cambiar-contraseña" && (
        <PasswordForm setVista={setVista} id={currentUser.id} />
      )}
    </div>
  );
};

export default UserPage;
