import "./Login.css"
import { Link } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from "../../firebase/config";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn (e) {
    e.preventDefault()

    signInWithEmailAndPassword(email, password)

  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    return console.log(user)
  }
  

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
                onChange={e => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                type="password"
                name="password"
                required
                placeholder="Insira sua senha"
                onChange={e => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <p>Não possui uma conta? <Link to='/registro'>Inscreva-se</Link></p>
            <button onClick={handleSignIn}  className="btnForm" >Entrar</button>
        </form>
    </div>
  )
}

export default Login