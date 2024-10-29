import CardPizza from '../../components/CardPizza/CardPizza'
import {pizzas} from '../../data/pizzas'
import './Home.css'


const Home = () => {

    return (
        <div className="home">
            <div className="pizzas-container">
                {pizzas.map((pizza, index) => (
                    <CardPizza
                        key={index}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
