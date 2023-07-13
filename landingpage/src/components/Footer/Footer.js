import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className="footer">
        <div className="contentFooter">
                <p>Imagens: <Link to="https://www.drawkit.com/">Drawkit</Link></p>
                <p>Think Green &copy; 2023</p>
        </div>
  </div>
  )
}

export default Footer