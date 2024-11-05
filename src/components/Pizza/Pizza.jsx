import { useEffect, useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardPizza from '../../components/CardPizza/CardPizza'



const Pizza = () => {
    // const [pizza, setPizza] = useState("p003"); // Estado para el término de búsqueda
    const pizza = "p001";
    const [pizzaData, setPizzaData] = useState([]);
    
    const searchPizza = () => {
        const apiUrl = `http://localhost:5000/api/pizzas/${pizza}`;
        axios
            .get(apiUrl)
            .then((response) => {
                console.log("Datos de la API:", response.data);
                //setPizzaData(response.data);
                setPizzaData(Array.isArray(response.data) ? response.data : [response.data]);
            })
            .catch((err) => {
                console.log("Error al obtener datos de la API:", err);
            });
        };
        useEffect(() => {
            searchPizza();
            //eslint-disable-next-line react-hooks/exhaustive-deps
            }, [pizza]);
        

    return (
        <>
        <Container>
            <div>
                <h1>Datos de la API</h1>
                <div className="mt-5 d-flex justify-content-center gap-3">
                    {pizzaData ? pizzaData.map((item) => (
                        <CardPizza
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            ingredients={item.ingredients}
                            img={item.img}
                            desc = {item.desc}
                        />
                    )): <h1>Not found</h1>}
                </div>
            </div>
        </Container>
    </>

);

}

export default Pizza