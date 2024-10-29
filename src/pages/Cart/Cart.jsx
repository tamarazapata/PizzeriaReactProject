import { pizzas } from "../../data/pizzas"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart(){
    const total = 10000
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Detalle del pedido</h1>
            <ul className="list-group">
                {pizzas.map((pizza =>(

                    <li key={pizza.id} className="list-group-item d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                            <img src={pizza.img} alt={pizza.name} className="img-thumbnail" style={{ width: '50px', height: '50px', marginRight: '15px' }} />
                            <div>
                                <strong>{pizza.name}</strong> - Precio Unitario: ${pizza.price}
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary me-2">-</button>
                            <span>{pizza.quantity || 1}</span>
                            <button className="btn btn-outline-secondary ms-2">+</button>
                        </div>
                    </li>
                )))
                }
            </ul>
            <div className="mb-4">
                <h3>Total:${total.toLocaleString()} </h3>
            </div>
        </div>
        

    )

    }

export default Cart;

    
