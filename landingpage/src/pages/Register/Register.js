import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <h2>Cadastre-se agora!</h2>
        <form>
            <label>
                <span>Nome:</span>
                <input 
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário"
                />
            </label>
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
            <label>
                <span>Confirmação de Senha:</span>
                <input 
                type="password"
                name="passwordConfirm"
                required
                placeholder="Confirme sua senha"
                />
            </label>
            <p>Já possui uma conta? <Link to='/login'>Entre aqui</Link></p>
            <button className="btnForm">Enviar</button>
        </form>
    </div>
  )
}

export default Register