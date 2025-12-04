import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <main className="error404">
      <section className="error404__card" aria-labelledby="error404-title">
        <div className="error404__code" aria-hidden="true">
          404
        </div>

        <h1 id="error404-title" className="error404__title">
          Página no encontrada
        </h1>

        <p className="error404__text">
          La ruta que intentaste visitar no existe o fue movida. Verificá la URL
          o volvé al inicio.
        </p>

        <div className="error404__actions">
          <Link to="/" className="error404__btn error404__btn--primary">
            Volver al inicio
          </Link>
          <Link to="/productos" className="error404__btn error404__btn--ghost">
            Ver productos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error404;
