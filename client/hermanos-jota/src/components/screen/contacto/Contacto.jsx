import ContactForm from "../../ui/contacto/ContactoForm";
import ContactInfo from "../../ui/contacto/ContactoInfo";
import ContactUbicacion from "../../ui/contacto/ContactoUbicacion";
import HeroProductoContacto from "../../ui/hero-producto-contacto/HeroProductoContacto";
import "./contacto.css";

const Contacto = () => {
    return (
        <main>
            <HeroProductoContacto
                title="Contáctanos"
                subtitle="Estamos aquí para ayudarte a encontrar los muebles perfectos para tu hogar"
            />

            <section className="contacto">
                <ContactForm />
                <ContactInfo />
                <ContactUbicacion />
            </section>
        </main>

    );
};

export default Contacto;
