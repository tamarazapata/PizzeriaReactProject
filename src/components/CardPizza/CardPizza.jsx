/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './CardPizza.css';

const Cards = ({ name, price, ingredients, img }) => {
    return (
        <Card className="pizza-card shadow-sm" >
            <Card.Img  variant="top" src={img} alt={name} className="pizza-image"  />
            <Card.Body>
            <Card.Title><h2 className="text-center">{name}</h2></Card.Title>
            <Card.Text> 
            <h4>Ingredientes:</h4>
                <ul>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p className="price-text">Precio: ${price}</p>
            </Card.Text>
            <div className="button-group">
                <Button variant="light" className="button">Ver más</Button>
                <Button variant="primary" className="button">Añadir al carrito</Button>
            </div>
            </Card.Body>
        </Card>
);
};

export default Cards;
