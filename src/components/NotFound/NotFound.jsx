import './NotFound.css';
import pizza404 from '../../assets/img/404.png'; 


const NotFound = () => {
    return (
        <div className="not-found">
            <div className="img-not-found"></div>
            <div className="text-center mt-4">
                <h1>¡Ups!</h1>
                <p>Parece que esta página se perdió en un horno de pizza...</p>
                <img 
                    src={pizza404} 
                    alt="Pizza Perdida"
                    className="img-pizza-extra"
                />
                <p>Haz clic <a href="/">aquí</a> para regresar a salvo antes de que se queme. 🔥</p>
            </div>
        </div>
    );
};

export default NotFound;
