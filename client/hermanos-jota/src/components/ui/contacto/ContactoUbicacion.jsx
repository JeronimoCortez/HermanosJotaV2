const ContactUbicacion = () => {
    return (
        <article className="contacto-ubicacion contacto-card">
            <h2>Visítanos</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.217000325727!2d-58.407348524702584!3d-34.623956158566465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae2a0c04a2f%3A0x77f381af8f0ca1fa!2sAv.%20San%20Juan%202847%2C%20C1232AAK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1755208607842!5m2!1ses-419!2sar"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </article>
    )
}

export default ContactUbicacion