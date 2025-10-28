import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const ContactForm = () => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { nombreCompleto, email, mensaje }
        console.log("Datos del formulario: ", formData);
        toast("Mensaje enviado con éxito")

        setNombreCompleto('');
        setEmail('');
        setMensaje('');
    }

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
                            value={nombreCompleto}
                            onChange={(e) => setNombreCompleto(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        id="mensaje"
                        required
                    ></textarea>
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>
            <ToastContainer position="bottom-left" theme="colored" pauseOnFocusLoss pauseOnHover={false} />
        </article>
    )
}

export default ContactForm