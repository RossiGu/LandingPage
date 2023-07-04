import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="container">
        <Link to="/">
            <h1>Logo veterinaria</h1>
        </Link>
        <div className="list">
            <ul>
                <li>
                    <Link to="/beneficios">Beneficios</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/registro">Registre-se</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar