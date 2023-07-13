import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from "react";
import auth from '../../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
      }).catch((error) => {
        console.log(error)

        let systemError

        if(error.message.includes("wrong-password")) {
          systemError = "Senha errada!"
        } else if (error.message.includes("user-not-found")) {
          systemError = "E-mail não cadastrado!"
        } else {
          systemError = "Ocorreu um erro, tente mais tarde!"
        }
        
        setError(systemError)
      })

      setError("")
  }
  

  return (
    <div className="login">
        <h2>Entre em sua conta!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input 
                type="email"
                name="email"
                required
                placeholder="E-mail do usuário"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                type="password"
                name="password"
                required
                placeholder="Insira sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </label>
            <p>Não possui uma conta? <Link to='/registro'>Inscreva-se</Link></p>
            {error && <p className="error">{error}</p>}
            <button className="btnForm" >Entrar</button>
        </form>
    </div>
  )
}

export default Login