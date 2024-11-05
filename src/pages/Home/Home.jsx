import { useState, useEffect } from 'react';
import CardPizza from '../../components/CardPizza/CardPizza'
// import {pizzas} from '../../data/pizzas'
import './Home.css'
import axios from 'axios';


const Home = () => {
    const [pizzas, setPizzas] = useState([])
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
        <div className="home">
            <div className="pizzas-container">
                {pizzas.map((pizza, id) => (
                    <CardPizza
                        key={id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        desc ={pizza.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
