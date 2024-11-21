import { useState, useContext, useEffect } from 'react';
import CardPizza from '../../components/CardPizza/CardPizza'
import './Home.css'
import axios from 'axios';
import { CartContext } from '../../context/CartContext';

export const Home = () => {
    const { addToCart } = useContext(CartContext);
    const [pizzas, setPizzas] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pizzas');
                setPizzas(response.data);
            } catch (err) {
                setError('Error al traer los datos de la API');
            }
        };
        fetchPizzas();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="pizzas-container">
            {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} addToCart={() => addToCart(pizza)} />

            ))}
        </div>
        );
};

export default Home;
