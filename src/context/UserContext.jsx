import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // const [token, setToken] = useState({ state: false });
    const [user, setUser] = useState(null);
    // const [token, setToken] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const fetchProfile = async () => {
            const currentToken = token || localStorage.getItem("token");
            if (currentToken) {
                try {
                    const response = await axios.get("http://localhost:5000/api/auth/me", {
                        headers: {
                            Authorization: `Bearer ${currentToken}`,
                        },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.log("Error al obtener el perfil del usuario", error);
                }
            }
        };
        fetchProfile();
    }, [token]);

    

    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            const { token, email: userEmail } = response.data;
            console.log(token, userEmail)
        setToken(token);
        setUser(userEmail);

        localStorage.setItem("token", token);
        localStorage.setItem("user", userEmail);

        } catch (error) {
            console.log("error", error);
        }
    };

    const getProfile = async () => {
    try {
        // Obtener el token desde el estado o localStorage
        const currentToken = token || localStorage.getItem("token");
        if (!currentToken) {
            console.log("No hay token disponible");
            return;
        }

        // Realizar la solicitud para obtener el perfil del usuario
        const response = await axios.get("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${currentToken}`,
            },
        });
        setUser(response.data);
    } catch (error) {
        console.log("Error al obtener el perfil del usuario", error);
    }
};


    const register = async (name, email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", 
            {
                name: name,
                email: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    },
                    
            }
        );

        // Establecer token si se recibe del servidor
        const { token } = response.data;
        if (token) {
            setToken(token);
            localStorage.setItem("token", token);
        }
    } catch (error) {
        console.error("Error durante el registro", error);
        if (error.response) {
            console.error("Datos del error:", error.response.data);
        }
        throw error;
    }
};

    const logout = () => {
        // setToken(false); 
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };
    return (
        <UserContext.Provider value={{ user, token, login, register, logout, getProfile}}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default UserProvider;