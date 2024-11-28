import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardPizza from "../../components/CardPizza/CardPizza"; // Adjust path as needed

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchPizza = async () => {
        try {
            const apiUrl = "http://localhost:5000/api/pizzas" 
            const response = await axios.get(apiUrl);
            const pizzaData = response.data.find((pizza) => pizza.id === id);
        if (pizzaData) {
            setPizza(pizzaData);
        } else {
            setError(`La Pizza con ${id} no fue encontrada`);
            }
        } catch (err) {
                console.error(err);
                setError("No se encontró la información de la pizza");
        }
    };
        fetchPizza();
    }, [id]);


    if (error) return <h1>{error}</h1>;


    if (!pizza) return <h1>Cargando información de tu pizza...</h1>;

    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="col-md-3 col-lg-3">
            <CardPizza
                pizza={pizza} 
                key={pizza.id}
                addToCart={() => console.log("Funcionalidad añadir al carrito")} 
            />
            </div>

        </div>
        );
    };

export default Pizza;
