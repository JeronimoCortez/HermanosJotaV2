import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        nombreCompleto: "",
        email: "",
        mensaje: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log("Datos del formulario: ", formData);
            toast.success("Mensaje enviado con éxito");

            setFormData({
                nombreCompleto: "",
                email: "",
                mensaje: ""
            });
        } catch (err) {
            setError(err);
            toast.error("Error al enviar el mensaje");
        } finally {
            setLoading(false);
        }
    };


    return (
        <article className='contacto-form contacto-card'>
            <form onSubmit={handleSubmit} className="contactoForm">
                <div className="contacto-form-header">
                    <h2>Envíanos un Mensaje</h2>
                    <p>
                        Completa el formulario y nos pondremos en contacto contigo lo
                        antes posible
                    </p>
                </div>

                <div className="contacto-form-content">
                    <div>
                        <label htmlFor="nombreCompleto">Nombre completo *</label>
                        <input
                            type="text"
                            name="nombreCompleto"
                            value={formData.nombreCompleto}
                            onChange={handleChange}
                            id="nombreCompleto"
                            placeholder="Nombre Completo"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo electrónico *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="correo@correo.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea
                        placeholder="Escribe un mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        id="mensaje"
                        required
                    ></textarea>
                </div>

                {error && (
                    <p className="contacto-form-error">
                        Ocurrió un error al enviar el mensaje: {error.message || error.toString()}
                    </p>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? "Enviando Mensaje..." : "Enviar Mensaje"}
                </button>
            </form>
            <ToastContainer position="bottom-left" theme="colored" pauseOnFocusLoss pauseOnHover={false} />
        </article>
    )
}

export default ContactForm