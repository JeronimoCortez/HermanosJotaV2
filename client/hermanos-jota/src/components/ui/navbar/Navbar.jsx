import { useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import "./navbar.css";
import NavLinks from "./NavLinks";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { LogOut } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { open, total } = useCart();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src="../assets/logo.svg"
            alt="Logo Mueblería Hermanos Jota"
            width="40"
          />
        </Link>
      </div>

      <nav className="elementos-nav">
        <NavLinks setVisible={setVisible} />
      </nav>

      <div className="buscador">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-search"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
              fill="#A0522D"
            ></path>
          </g>
        </svg>
        <input type="text" placeholder="Buscar" className="input-search" />
        {currentUser ? (
          <div
            className="user-info-desktop"
            style={{
              display: "flex",
              alignContent: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <h2>
              <span
                className="material-symbols-outlined"
                onClick={() => navigate("/perfil")}
              >
                account_circle
              </span>
            </h2>
            <LogOut onClick={handleLogout} style={{ cursor: "pointer" }} />
          </div>
        ) : (
          <Link className="login-link-desktop" to="/login">
            Iniciar sesión
          </Link>
        )}

        <div id="icono-carrito" className="carrito-icono" onClick={open}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="#A0522D"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#A0522D"
          >
            <path d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z"></path>
          </svg>
          <span
            id="contador-carrito"
            className={
              total !== 0 ? "contador-carrito visible" : "contador-carrito"
            }
          >
            {total}
          </span>
        </div>
        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setVisible(true)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <rect y="4" width="24" height="2" rx="1" fill="#A0522D"></rect>
            <rect y="11" width="24" height="2" rx="1" fill="#A0522D"></rect>
            <rect y="18" width="24" height="2" rx="1" fill="#A0522D"></rect>
          </svg>
        </button>
      </div>
      <MobileMenu
        setVisible={setVisible}
        visible={visible}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Navbar;
