import NavLinks from "./NavLinks";

const MobileMenu = ({ mostrarPagina, setVisible, visible }) => {
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
      <NavLinks mostrarPagina={mostrarPagina} />
    </div>
  );
};

export default MobileMenu;
