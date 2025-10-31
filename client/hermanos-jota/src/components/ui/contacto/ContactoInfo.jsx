import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineAccessTime } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <article className="contacto-info contacto-card">
            <h2>Información de contacto</h2>

            <address>
                <div>
                    <h3>
                        <FiMapPin style={{ color: "var(--color-verde-salvia)" }} />
                        Dirección
                    </h3>
                    <p>
                        AV. San Juan 2847, C1232AAB, Barrio de San Cristóbal, Ciudad
                        Autónoma de Buenos Aires, Argentina
                    </p>
                </div>

                <div>
                    <h3>
                        <BsTelephone style={{ color: "var(--color-verde-salvia)" }} />
                        Teléfono
                    </h3>
                    <p>+54 11 4567-8900</p>
                </div>

                <div>
                    <h3>
                        <MdOutlineEmail style={{ color: "var(--color-verde-salvia)" }} />
                        Email
                    </h3>
                    <p><span>General</span> info@hermanosjota.com.ar</p>
                    <p><span>Ventas</span> ventas@hermanosjota.com.ar</p>
                </div>

                <div>
                    <h3>
                        <MdOutlineAccessTime style={{ color: "var(--color-verde-salvia)" }} />
                        Horarios
                    </h3>
                    <p>Lunes a Viernes: 10:00 - 19:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                </div>
            </address>
        </article>
    )
}

export default ContactInfo