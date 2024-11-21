/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardPizza.css';

const Cards = ({pizza,addToCart}) => {
    const { id, name, price, ingredients, img, desc } = pizza;
    return (
        <Card className="pizza-card card shadow-sm h-100" >
            <Card.Img  variant="top" src={img} alt={name} className="pizza-image"  />
            <Card.Body>
                <Card.Title>
                    <h2 className="card-title text-uppercase text-center">{name}</h2>
                </Card.Title>
                <Card.Text>
                    <div className="ingredients-list"> 
                        <p ><strong>Ingredientes: </strong> {ingredients.join(", ")}</p>
                    </div> 
                    <p className="fw-bold price-text">Precio: ${price}</p>
                    <span className="text-muted card-text">{desc}</span>
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between">
                    <Button className="btn btn-secondary">Ver más</Button>
                    {/* <Button className="btn btn-add-cart">Añadir al carrito</Button> */}
                    <Button className="btn btn-add-cart" onClick={() => addToCart(id)}>Añadir al carrito</Button>
                </div>
            </Card.Body>
        </Card>
);
};

export default Cards;
