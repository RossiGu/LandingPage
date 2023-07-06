import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className="footer">
    <nav className="footerNav">
        <div className="list">
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/preservacao">Preservação</Link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
  )
}

export default Footer