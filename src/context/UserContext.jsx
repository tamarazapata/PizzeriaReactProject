import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState({ state: true });
    const logout = () => {
        setToken(false); // Set token to false when logging out
    };
    return (
        <UserContext.Provider value={{ token, setToken , logout}}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;
