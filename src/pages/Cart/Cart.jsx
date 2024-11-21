import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../Cart/Cart.css'; 

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleRemove = (pizzaId) => {
        removeFromCart(pizzaId);
    };

    const handleQuantityChange = (pizzaId, delta) => {
        const pizza = cart.find((item) => item.id === pizzaId);
        if (pizza) {
            const newQuantity = pizza.quantity + delta;
            if (newQuantity <= 0) {
            handleRemove(pizzaId);
            } else {
            updateQuantity(pizzaId, newQuantity);
            }
        }
    };

    const total = cart.reduce((accumulate, item) => accumulate + item.price * item.quantity, 0);

    return (
    <div className="container mt-5 cart-container">
        <h1 className="mb-4 text-center">Detalle del pedido</h1>
        {cart.length === 0 ? (
            <h3 className="text-center">Tu carrito está vacío</h3>
            ) : (
            <>
            <ul className="list-group mb-4">
                {cart.map((item) => (
                    <li key={item.id} className="list-group-item cart-item">
                        <div className="d-flex align-items-center">
                            <img src={item.img} alt={item.name} className="img-thumbnail cart-img"/>
                            <div>
                                <strong className="cart-item-name">{item.name}</strong>{}
                                <p className="cart-item-price">Precio Unitario: ${item.price}</p>
                                <p className="cart-item-subtotal">   Subtotal: ${(item.price * item.quantity).toLocaleString()} </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-secondary btn-dark me-2"> - </button>
                            <span className="cart-item-quantity">{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-secondary btn-dark ms-2"> + </button>
                            <button onClick={() => handleRemove(item.id)} className="btn btn-outline-danger ms-2"> <i className="bi bi-trash"></i></button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <h2 className="cart-total">Total: ${total.toLocaleString()}</h2>
            </div>
            <div className="d-flex justify-content-between button-container">
                        <button onClick={() => navigate('/')} className="btn btn-dark btn-lg"> Seguir Comprando </button>
                        <button className="btn btn-success btn-lg" >Ir a Pagar </button>
            </div>
            </>
        )}
    </div>
    );
};

export default Cart;
