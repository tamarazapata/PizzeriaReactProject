import  { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        pass: "",
    });
    const [error, setError] = useState(false); // State for errors

    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Valida que se complete el formulario completo
        if (formData.name.trim() === "" || formData.email.trim() === "" || formData.pass.trim() === "") {
            Swal.fire({
                title: "Error!",
                text: "Debes completar todos los datos.",
                icon: "error",
                confirmButtonText: "OK"
            });
            setError(true);
            return;
        }
        //Mensaje de éxito
        Swal.fire({
            title: "Excelente!",
            text: "Tu registro se ha completado con éxito",
            icon: "success",
            confirmButtonText: "OK"
        });

        setFormData({
            email: "",
            pass: "",
        });
        setError(false);
    };



    return (
        <div className="bg-dark text-light d-flex align-items-center justify-content-between ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className = "col-md-6">
                        <h2 className="text-center m-4">Login</h2>
                        {error}
                        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light text-dark">
                            {/* Email */}
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                />
                            </div>
                            {/* Password */}
                            <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password:</label>
                            <input
                                type="password"  
                                className={`form-control ${error && formData.pass.trim() === "" ? "is-invalid" : ""}`}
                                id="pass"
                                name="pass"
                                value={formData.pass}
                                onChange={handleChange}
                            />
                            </div>
                            {/* Botón */}
                            <button type="submit" className="btn btn-secondary w-100 mb-3">Ingresar!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default LoginForm;