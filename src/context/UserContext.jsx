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
                    setUser(response.data.email); 
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
    
            setToken(token);
            setUser(userEmail);
    
            localStorage.setItem("token", token);
            localStorage.setItem("user", userEmail);
    
            return { success: true }; // Success case
        } catch (error) {
            console.error("Login error", error.response?.data?.error || error.message);
            return { success: false, message: error.response?.data?.error || "Login failed" }; // Failure case
        }
    };
    


    const register = async (name, email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });
            const { token, email: userEmail } = response.data;
            setToken(token);
            setUser(userEmail);

            localStorage.setItem("token", token);
            localStorage.setItem("user", userEmail);

            return { success: true };

        } catch (error) {
            console.error("Error en el registro", error.response?.data?.error || error.message);
            return { success: false, message: error.response?.data?.error || "Registro falló" };
            }
        }
    
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default UserProvider;