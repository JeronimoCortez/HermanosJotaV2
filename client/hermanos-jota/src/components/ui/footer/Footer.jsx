import "./footer.css";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import NavLinks from "../navbar/NavLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <Link to="/">
          <img
            src="../assets/logo-blanco.svg"
            alt="Logo Mueblería Hermanos Jota"
            width="100"
          />
        </Link>
        <address>
          <p>
            <FaMapMarkerAlt />
            AV. San Juan 2847 C1232AAB - Barrio de San Cristóbal, CABA Argentina
          </p>

          <p>
            <BsFillTelephoneFill />
            +54 11 4567-8900
          </p>
          <p>
            <MdEmail />
            info@hermanosjota.com.ar
          </p>

          <div>
            <a
              href="https://alt-5a31a0302d72d.blackboard.com/bbcswebdav/pid-982156-dt-content-rid-14612411_1/courses/FSD.00-43441/Instagram copy/index.html?one_hash=B9E8A9D05C9566B025FEF3B0049FAD44&f_hash=B1C6BA2B1ADDB43478BD084039016C84"
              target="_blank"
            >
              <FaInstagram style={{ color: "white", fontSize: "20px" }} />
            </a>
          </div>
        </address>
      </section>

      <section className="footer-nav">
        <nav>
          <NavLinks />
        </nav>

        <p className="footer-copy">
          &copy; 2025 Mueblería Hermanos Jota. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
