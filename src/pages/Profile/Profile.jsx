import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = ( ) => {
    const { logout } = useContext(UserContext); 
    const navigate = useNavigate();
    const email = "user@example.com"

    const handleLogout = () => {
        logout(); 
        navigate("/login"); 
        };

    return (
        <div className="container d-flex flex-column align-items-center p-4">
            <img 
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&s=200" 
                alt="User Avatar" 
                className="rounded-circle mb-3" 
                style={{ width: '100px', height: '100px' }} 
            />
            <h2 className="text-center mb-3">{email}</h2>
            <button className="btn btn-primary" onClick={handleLogout}> Sign Out</button>
        </div>
    );
};

export default Profile;