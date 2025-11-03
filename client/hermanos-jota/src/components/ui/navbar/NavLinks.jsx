import { Link } from "react-router-dom";

const LINKS = [
  {
    to: "/",
    display: "Inicio",
  },
  {
    to: "productos",
    display: "Productos",
  },
  {
    to: "contacto",
    display: "Contacto",
  },
  {
    to: "admin/crear-producto",
    display: "Agregar producto",
  },
];
const NavLinks = ({ setVisible }) => {
  return (
    <ul>
      {LINKS.map((link, i) => (
        <Link
          className="nav-link"
          key={i}
          to={`${link.to}`}
          onClick={() => setVisible(false)}
        >
          {link.display}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
