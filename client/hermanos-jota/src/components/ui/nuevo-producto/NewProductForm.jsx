import { useContext, useEffect, useRef, useState } from "react";
import "./NuevoProducto.css";
import Notification from "../notification/Notification";
import { ProductosContext } from "../../../context/ProductosContext";

const CATEGORIAS = ["sala", "dormitorio", "comedor", "oficina"];

const INITIAL_FORM = {
  nombre: "",
  descripcion: "",
  imageUrl: "",
  precio: 0,
  stock: 0,
  categoria: "sala",
  caracteristicas: [],
};

const NewProductForm = ({ setVista, productoParaEditar }) => {
  const [form, setForm] = useState(productoParaEditar || INITIAL_FORM);
  const [caracteristica, setCaracteristica] = useState("");
  const [notification, setNotification] = useState({ message: "", status: "" });

  const { actualizarProducto, crearProducto } = useContext(ProductosContext);

  const formRef = useRef(null);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  }, [notification]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "caracteristicas") {
      setCaracteristica(value);
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function sumarCaracteristica(e) {
    e.preventDefault();
    if (caracteristica === "") {
      setNotification("Escriba una característica");
    }
    setForm((prev) => ({
      ...prev,
      caracteristicas: [...prev.caracteristicas, caracteristica],
    }));
    setCaracteristica("");
  }

  function deleteCaracteristica(eliminado) {
    let nuevoArray = form.caracteristicas.filter((el, i) => i !== eliminado);

    setForm((prev) => ({ ...prev, caracteristicas: nuevoArray }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    window.scrollTo({
      behavior: "smooth",
      top: formRef.current.getBoundingClientRect().top + window.scrollY - 24,
    });

    if (!form.nombre) {
      setNotification({ message: "El nombre es necesario", status: "danger" });
    } else if (!form.descripcion) {
      setNotification({
        message: "El producto debe tener una descripción",
        status: "danger",
      });
    } else if (!form.imageUrl) {
      setNotification({
        message: "El producto debe tener una imágen",
        status: "danger",
      });
    } else if (form.precio === 0) {
      setNotification({
        message: "El precio debe ser mayor a cero",
        status: "danger",
      });
    } else if (form.stock === 0) {
      setNotification({
        message: "El stock  no puede ser cero",
        status: "danger",
      });
    } else if (form.caracteristicas.length < 3) {
      setNotification({
        message: "El producto debe tener al menos 3 características",
        status: "danger",
      });
    } else if (form.caracteristicas.length > 6) {
      setNotification({
        message: "El producto no puede tener más de 6 características",
        status: "danger",
      });
    } else {
      if (productoParaEditar) {
        actualizarProducto(productoParaEditar._id, form);
        setNotification({
          message: "Producto ediato con éxito",
          status: "succes",
        });
      } else {
        crearProducto(form);
        setForm(INITIAL_FORM);
        setCaracteristica("");
        setNotification({
          message: "Producto creado con éxito",
          status: "succes",
        });
      }
      setTimeout(() => {
        setVista("productos");
      }, 3000);
    }
  }

  return (
    <>
      {notification.message && (
        <Notification ref={formRef} notification={notification} />
      )}
      <form
        ref={formRef}
        className="new-product-form"
        id="new-product-form"
        onSubmit={handleSubmit}
      >
        <div>
          <h3 className="form-title">Agregar Producto</h3>
          <label htmlFor="nombre">Nombre: *</label>
          <br />
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre del mueble"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción: *</label>
          <br />
          <textarea
            type="textarea"
            cols="30"
            name="descripcion"
            id="descripcion"
            placeholder="Escribre una breve derscripción"
            value={form.descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">URL de la imágen: *</label>
          <br />
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="https://localhost:3001/example.png"
            value={form.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="product-details">
          <div>
            <label htmlFor="precio">Precio: *</label>
            <br />
            <input
              type="number"
              name="precio"
              id="precio"
              placeholder="1000"
              value={form.precio}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="stock">Stock: *</label> <br />
            <input
              type="number"
              name="stock"
              id="stock"
              placeholder="5"
              value={form.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="categoria">Categoría: *</label>
            <select
              name="categoria"
              id="categoria"
              value={form.categoria}
              onChange={handleChange}
            >
              {CATEGORIAS.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="product-caracteristicas">
          <div>
            <label htmlFor="caracteristicas">Caracteristicas: *</label> <br />
            <input
              type="text"
              name="caracteristicas"
              id="caracteristicas"
              placeholder="Suma una característica"
              value={caracteristica}
              onChange={handleChange}
            />
          </div>
          <button onClick={sumarCaracteristica}>Agregar</button>
        </div>
        <div className="caracteristicas-container">
          {form.caracteristicas.length > 0 && (
            <ol>
              {form.caracteristicas.map((el, i) => (
                <li key={i}>
                  <p>{el}</p>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => deleteCaracteristica(i)}
                  >
                    delete
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
        <button className="enviar">Añadir producto</button>
      </form>
    </>
  );
};

export default NewProductForm;
