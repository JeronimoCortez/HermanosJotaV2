import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const MobileMenu = ({ setVisible, visible, currentUser, handleLogout }) => {
  return (
    <div className={!visible ? "mobile-menu" : "mobile-menu open"}>
      <div className="close-menu" onClick={() => setVisible(false)}>
        <button className="btn-cerrar-menu" aria-label="Cerrar menú">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="#A0522D"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
      <NavLinks setVisible={setVisible} />
      <div className="mobile-menu-auth">
        {currentUser ? (
          <div className="mobile-user-info">
            <Link to="/perfil" className="mobile-username">
              {currentUser.username}
            </Link>
            <button
              className="mobile-logout-btn"
              onClick={() => {
                handleLogout();
                setVisible(false);
              }}
            >
              <LogOut size={20} />
              <span>Cerrar sesión</span>
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="mobile-login-link"
            onClick={() => setVisible(false)}
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
