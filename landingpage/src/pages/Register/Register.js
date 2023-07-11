import "./Register.css"
import { Link } from 'react-router-dom'
import { useState } from "react";
import auth from '../../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    .then((useCredential) => {
      console.log(useCredential)
    }).catch((error) => {
      console.log(error)
      
      let systemError
  
      if(error.message.includes("Password")) {
        systemError = "A senha precisa ter pelo menos 6 caracteres!"
      } else if (error.message.includes("email-already")) {
        systemError = "E-mail já cadastrado!"
      } else {
        systemError = "Ocorreu um erro, tente mais tarde!"
      }

      if (password !== confirmPassword) { 
        systemError = "As senhas precisam ser iguais" 
        return
      }
      
      setError(systemError)
      
    })
    
    
    
  };

  return (
    <div className="register">
      <h2>Cadastre-se agora!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                />
            </label>
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
            <label>
                <span>Confirmação de Senha:</span>
                <input 
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha"
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
                />
            </label>
            <p>Já possui uma conta? <Link to='/login'>Entre aqui</Link></p>
            <button className="btnForm">Cadastrar</button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register