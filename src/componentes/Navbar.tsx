import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Comentarios">Comentarios</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;