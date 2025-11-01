import './hero-banner.css'
import { useNavigate } from 'react-router-dom';



function HeroBanner({ title, subtitle, paragraph}) {

    const navigate = useNavigate()

    const irCatalogo = () =>{
        navigate('/catalogo')
    }
    return (
        <section className='hero-banner'>
            <div className="hero-banner-content">
                <h1 className="hero-banner-title">{title}</h1>
                <h2 className="hero-banner-subtitle">{subtitle}</h2>
                <p className="hero-banner-paragraph">{paragraph}</p>
                <button className='hero-banner-button' onClick={irCatalogo}>Ver Productos</button>

            </div>
        </section>
    )
}

export default HeroBanner;