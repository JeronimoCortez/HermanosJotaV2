import { createContext, useEffect, useState } from 'react'
/* import jwtDecode from 'jwt-decode'; */

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const VITE_API_LOGIN = /* import.meta.env.VITE_API_LOGIN || */ 'http://localhost:4000/api/login';

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        /* if (token) {
            const decoded = jwtDecode(token);
        } */
        setCurrentUser(token);
        setLoading(false);
    }, []);

    const logout = () => {
        localStorage.removeItem("authToken");
        setCurrentUser(null);
    };

    const login = async (email, password) => {
        const res = await fetch(VITE_API_LOGIN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        localStorage.setItem("authToken", data.token);
        setUser(data.user);
    };


    const value = { currentUser, logout, login, loading, setLoading }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

