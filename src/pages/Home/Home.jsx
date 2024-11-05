import CardPizza from '../../components/CardPizza/CardPizza'
import {pizzas} from '../../data/pizzas'
import './Home.css'


const Home = () => {

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
