import { useState } from "react";
import { pizzas } from "../../data/pizzas"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Cart(){
    const [pizzaList, setPizzaList] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 1 })));
    
    const handleQuantityChange = (id, delta) => {
        setPizzaList(prevPizzaList => prevPizzaList.map(pizza => {
            if (pizza.id === id) {
                const newQuantity = pizza.quantity + delta;
                return {
                    ...pizza,
                    quantity: newQuantity < 0 ? 0 : newQuantity 
                };
            }
            return pizza;
        }));
    };

    const total = pizzaList.reduce((accumulate, pizza) => accumulate + (pizza.price * pizza.quantity), 0);
    
    const handleRemovePizza = (id) => {
        setPizzaList(prevPizzaList => prevPizzaList.filter(pizza => pizza.id !== id));
    };
    
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Detalle del pedido</h1>
            <ul className="list-group">
                {pizzaList.map((pizza =>(

                    <li key={pizza.id} className="list-group-item d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                            <img src={pizza.img} alt={pizza.name} className="img-thumbnail" style={{ width: '100px', height: '80px', marginRight: '15px' }} />
                            <div>
                                <strong style={{ fontSize: '1.6rem' }} >{pizza.name}</strong>  <span style={{ fontSize: '1.4rem' }}> - Precio Unitario: ${pizza.price}</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            {pizza.quantity === 0 && (
                                <button onClick={() => handleRemovePizza(pizza.id)} className="btn btn-outline-danger me-2">
                                    <i className="bi bi-trash"></i>
                                </button>
                            )}
                            <button onClick={() => handleQuantityChange(pizza.id, - 1)} className="btn btn-secondary btn-dark me-2">-</button>
                            <span style={{ fontSize: '1.4rem' }}>{pizza.quantity}</span>
                            <button onClick={() => handleQuantityChange(pizza.id, + 1)} className="btn btn-secondary btn-dark ms-2">+</button>                            
                        </div>
                    </li>
                )))
                }
            </ul>
            <div className="mb-4">
                <h2>Total:${total.toLocaleString()} </h2>
            </div>
        </div>
    );
}


export default Cart;

    
