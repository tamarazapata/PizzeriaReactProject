import './Navbar.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
    const total = 80000;
    const token = false;

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="bg-dark">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="text-light mt-2 pe-2 text-decoration-none"> 🍕 Home</Link>
                    
                    {token ? (
                        <>
                            <Link to="/profile" className="text-light mt-2 pe-2 text-decoration-none">🔓 Profile</Link>
                            <Link to="/logout" className="text-light mt-2 pe-2 text-decoration-none">🔒 Logout</Link>
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