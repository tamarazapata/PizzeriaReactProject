import  { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
        confirmPass: ""
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
        //Confirmación de contraseñas
        if (formData.pass !== formData.confirmPass) {
            Swal.fire({
                title: "Error!",
                text: "Las contraseñas no coinciden.",
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
            name: "",
            email: "",
            pass: "",
            confirmPass: "",
        });
        setError(false);
    };


    return (
        <div className="bg-dark text-light vh-100 d-flex align-items-center justify-content-between">
            <div className="container">
                <div className="row justify-content-center">
                    <div className = "col-md-6">
                        <h2 className="text-center mb-4">Registro</h2>
                        {error}
                        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light text-dark">
                        <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                        </div>

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

                        <div className="mb-3">
                            <label htmlFor="confirmPass" className="form-label">Confirmar Password:</label>
                            <input
                                type="password"  
                                className={`form-control ${error && formData.confirmPass.trim() === "" ? "is-invalid" : ""}`}
                                id="confirmPass"
                                name="confirmPass"
                                value={formData.confirmPass}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-secondary w-100 mb-3">Registrarme!</button>

                        <button className="btn btn-danger w-100 mb-2">Login with Google</button>
                        <button className="btn btn-primary w-100 mb-2">Login with Facebook</button>
                        <button className="btn btn-dark w-100 mb-2">Login with GitHub</button>
        
                        </form>

                    </div>

                </div>

            </div>
        </div>
        );
    };

export default RegisterForm;