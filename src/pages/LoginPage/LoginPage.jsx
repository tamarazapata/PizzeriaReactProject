import { useState, useContext } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        pass: "",
    });
    
    const { login } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email.trim() === "" || formData.pass.trim() === "") {
            Swal.fire({
                title: "Error!",
                text: "Debes completar todos los datos.",
                icon: "error",
                confirmButtonText: "OK",
            });
                        return;
        }
        try {
            await login(formData.email, formData.pass);
            Swal.fire({
                title: "Éxito!",
                text: "Has iniciado sesión correctamente.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form container mt-5 p-4 border rounded">
            <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="form-control"
                    value={formData.pass}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );
};

export default LoginForm;
