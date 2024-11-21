import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {

        const existingPizzaIndex = cart.findIndex((item) => item.id === pizza.id);
        if (existingPizzaIndex >= 0) {

        const updatedCart = cart.map((item, index) => {
            if (index === existingPizzaIndex) {
            return {
                ...item,
                quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    };

    const removeFromCart = (pizzaId) => {
        setCart(cart.filter((item) => item.id !== pizzaId));
    };
    
    const updateQuantity = (pizzaId, quantity) => {
        setCart(cart.map((item) => 
            item.id === pizzaId ? { ...item, quantity } : item
        ));
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}>
        {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
