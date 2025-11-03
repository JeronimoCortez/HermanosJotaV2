import HeroProductoContacto from "../../ui/hero-producto-contacto/HeroProductoContacto";
import NewProductForm from "../../ui/nuevo-producto/NewProductForm";

const NewProductPage = () => {
  return (
    <>
      <HeroProductoContacto
        title={"Agregar Nuevo Producto"}
        subtitle={"Aqui puedes registrar un nuevo producto dentro del catálogo"}
      />
      <NewProductForm />
    </>
  );
};

export default NewProductPage;
