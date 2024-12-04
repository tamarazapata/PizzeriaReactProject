import './Navbar.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { UserContext } from "../../context/UserContext";

const NavBarMenu = () => {
    const { token, logout } = useContext(UserContext);
    const { getTotal } = useContext(CartContext); 
    const total = getTotal();
    const handleLogout = () => {
        logout();
    };
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="navbar-custom">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="text-light mt-2 pe-2 text-decoration-none">🍕 Home</Link>
                    {token ? (
                        <>
                            <Link to="/profile" className="text-light mt-2 pe-2 text-decoration-none">🔓 Profile</Link>
                            <button  onClick={handleLogout}  className="text-light mt-2 pe-2 text-decoration-none bg-dark border-0">🔒 Logout</button>
                            
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-light mt-2 pe-2 text-decoration-none">🔐 Login </Link>
                            <Link to="/register" className="text-light mt-2 text-decoration-none">🔐 Register</Link>
                        </>
                    )}
                </Nav>

                <Nav>
                <Link to="/cart" className="text-light mt-2 pe-2 text-decoration-none"> 🛒 Total Carrito: </Link>
                    <span className="text-light mt-2 pe-2">
                        ${total.toLocaleString()}
                    </span>
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
        );
    };

export default NavBarMenu;