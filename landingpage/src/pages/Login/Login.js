import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <h2>Entre em sua conta!</h2>
        <form>
            <label>
                <span>Email:</span>
                <input 
                type="email"
                name="email"
                required
                placeholder="E-mail do usuário"
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                type="password"
                name="password"
                required
                placeholder="Insira sua senha"
                />
            </label>
            <p>Não possui uma conta? <Link to='/registro'>Inscreva-se</Link></p>
            <button className="btnForm">Entrar</button>
        </form>
    </div>
  )
}

export default Login