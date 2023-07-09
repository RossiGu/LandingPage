import "./Register.css"
import { Link } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from "../../firebase/config";


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut (e) {
    e.preventDefault()

    createUserWithEmailAndPassword(email, password)

  }

  if (loading) {
    return <p>Carregando...</p>;
  }


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
                onChange={e => setName(e.target.value)}
                value={name}
                />
            </label>
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
            <label>
                <span>Confirmação de Senha:</span>
                <input 
                type="password"
                name="passwordConfirm"
                required
                placeholder="Confirme sua senha"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                />
            </label>
            <p>Já possui uma conta? <Link to='/login'>Entre aqui</Link></p>
            <button onClick={handleSignOut} className="btnForm">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register