import './Navbar.css';


const Navbar = () => {
    const total = 50000;
    const token = false;

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">🍕 Home</li>
                {token ? (
                <>
                    <li className="nav-item">🔓 Profile</li>
                    <li className="nav-item">🔒 Logout</li>
                </>
            ) : (
                <>
                    <li className="nav-item">🔐 Login</li>
                    <li className="nav-item">🔐 Register</li>
                </>
            )}
            <li className="nav-item">🛒 Total: ${total.toLocaleString(0)}</li>
            </ul>
        </nav>
        );
    };

export default Navbar;