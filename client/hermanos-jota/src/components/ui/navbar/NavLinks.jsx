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
];
const NavLinks = ({ setVisible }) => {
  return (
    <ul>
      {LINKS.map((link, i) => (
        <li key={i}>
          <Link
            className="nav-link"
            to={`${link.to}`}
            onClick={() => setVisible && setVisible(false)}
          >
            {link.display}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
