import { Link } from 'react-router-dom'
import { useAuthValue } from '../../contexts/AuthContext'
import auth from '../../firebase/config'
import { signOut } from 'firebase/auth';
import "./NavBar.css"
import logo from "../../images/logo.png"

const NavBar = () => {

    const { authUser } = useAuthValue()

    const signOutUser = () => {
        signOut(auth).then(() => {
          console.log("Saiu com sucesso")
        }).catch(error => console.log(error))
      }
    

  return (
    <nav className="container">
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
        <div className="list">
            <ul>
                {authUser && (
                    <>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                         </li>
                    </>
                )}
            </ul>
            <ul>
                {authUser && (
                    <>
                        <li>
                            <Link to="/preservacao">Preservação</Link>
                        </li>
                    </>
                )}
            </ul>
            <ul>
                {!authUser && (
                    <>
                        <li>
                            <Link to="/registro">Registre-se</Link>
                        </li>
                    </>
                )}
            </ul>
            <ul>
                {!authUser && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}
            </ul>
            <ul>
                {authUser && (
                    <li>
                        <button onClick={signOutUser}>Sair</button>
                    </li>
                )}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar