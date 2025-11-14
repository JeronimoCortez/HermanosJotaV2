import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function Login() {
    const { login, loading, setLoading } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                setError('Por favor completa ambos campos.')
                return
            }
            await login({ email, password });
            alert("Login exitoso");
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
            setEmail('')            
            setPassword('')
        }
    };

    return (
        <div className="login-page">
            <h2>Inicia sesión</h2>
            {loading ? <p>Cargando...</p> : null}
            <form className="login-form" onSubmit={handleSubmit}>                
                <label className="login-form__label">
                    Email
                    <input
                        className="login-form__input"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Ingresa tu email"
                    />
                </label>
                <label className="login-form__label">
                    Contraseña
                    <input
                        className="login-form__input"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Ingresa tu contraseña"
                    />
                </label>
                {error && <p className="login-form__error">{error}</p>}
                <button className="login-form__button" type="submit">
                    Entrar
                </button>
            </form>
        </div>
    )
}

