import './HeroProductoContacto.css'

const HeroProductoContacto = ({ title, subtitle }) => {
    return (
        <div className="hero">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
        </div>
    )
}

export default HeroProductoContacto;