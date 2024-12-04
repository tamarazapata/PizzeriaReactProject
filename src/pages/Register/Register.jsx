import  { useState, useContext } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../../context/UserContext";


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
        confirmPass: ""
    });
    // const [error, setError] = useState(false); // State for errors

    const { register, setToken  } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name.trim() === "" || formData.email.trim() === "" || formData.pass.trim() === "" || formData.confirmPass.trim() === "") {
            Swal.fire({
                title: "Error!",
                text: "Debes completar todos los datos.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }
    
        // Valida que las contraseñas coincidan
        if (formData.pass !== formData.confirmPass) {
            Swal.fire({
                title: "Error!",
                text: "Las contraseñas no coinciden.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }
    
        // Llamar al método register del contexto
        try {
            await register(formData.name, formData.email, formData.pass);
            Swal.fire({
                title: "Éxito!",
                text: "Te has registrado correctamente.",
                icon: "success",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    setToken(true); 
                }
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Hubo un problema al registrarte. Por favor, intenta de nuevo.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="register-form container mt-5 p-4 border rounded">
            <div className="form-group mb-3">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
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
            <div className="form-group mb-3">
                <label htmlFor="confirmPass">Confirmar Password:</label>
                <input
                    type="password"
                    name="confirmPass"
                    id="confirmPass"
                    className="form-control"
                    value={formData.confirmPass}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
    );
};

export default RegisterForm;