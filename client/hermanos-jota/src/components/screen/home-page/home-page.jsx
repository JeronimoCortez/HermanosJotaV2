import HeroBanner from "../../ui/hero-banner/hero-banner";
import ProductosDestacados from "../../ui/destacados/destacados";
import "./home-page.css";

function HomePage() {
  return (
    <>
      <HeroBanner
        title="HERMANOS JOTA"
        subtitle="MUEBLES QUE ALIMENTAN EL ALMA"
        paragraph="Cada pieza cuenta con una historia de artesanía que honra el pasado mientras abraza el futuro"
      ></HeroBanner>
      <ProductosDestacados />
    </>
  );
}

export default HomePage;
