import { useState } from "react";

const CATEGORIAS = [
  { filtro: "todos", display: "Todos" },
  { filtro: "sala", display: "Sala" },
  { filtro: "dormitorio", display: "Dormitorio" },
  { filtro: "comedor", display: "Comedor" },
  { filtro: "oficina", display: "Oficina" },
];
const PRECIOS = [
  { filtro: "todos", display: "Todos" },
  { filtro: "bajo", display: "$0-$500" },
  { filtro: "medio-bajo", display: "$500-$1000" },
  { filtro: "medio-alto", display: "$1000-$1500" },
  { filtro: "alto", display: "$1500-$2000" },
];

const FiltrosSection = ({ onFiltrar }) => {
  const [categoria, setCategoria] = useState("todos");
  const [precio, setPrecio] = useState("todos");

  const handleCategoria = (value) => {
    setCategoria(value);
    onFiltrar(value, precio);
  };

  const handlePrecio = (value) => {
    setPrecio(value);
    onFiltrar(categoria, value);
  };
  return (
    <section className="filtros">
      <h3>
        <span className="material-symbols-outlined">filter_alt</span>Filtros
      </h3>
      <div className="filtros-menu">
        <div className="categoria">
          <h4>Categoria</h4>
          <ul id="categoria-filtro" className="filtro">
            {CATEGORIAS.map((cat) => (
              <li
                key={cat.filtro}
                className={categoria === cat.filtro ? "active-filtro" : ""}
                onClick={() => handleCategoria(cat.filtro)}
              >
                {cat.display}
              </li>
            ))}
          </ul>
        </div>
        <div className="precios">
          <h4>Precios</h4>
          <ul id="precio-filtro" className="filtro">
            {PRECIOS.map((pr) => (
              <li
                key={pr.filtro}
                className={precio === pr.filtro ? "active-filtro" : ""}
                onClick={() => handlePrecio(pr.filtro)}
              >
                {pr.display}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FiltrosSection;
