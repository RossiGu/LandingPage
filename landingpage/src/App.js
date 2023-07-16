import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  { AuthProvider } from './contexts/AuthContext'
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/config';


import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Preservacao from './pages/Preservacao/Preservacao'
import Footer from './components/Footer/Footer';
import Ecossistemas from './pages/Preservacao/Ecossistemas'
import Recursos from './pages/Preservacao/Recursos';
import Poluicao from './pages/Preservacao/Poluicao';
import Reciclagem from './pages/Preservacao/Reciclagem';
import Arvores from './pages/Preservacao/Arvores'
import Transportes from './pages/Preservacao/Transportes'
import Limpeza from './pages/Preservacao/Limpeza'

function App() {

  const [authUser, setAuthUser] = useState(undefined)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(undefined)
      }
    })

    return () => {
      listen()
    }
    
  }, [])


  return (
    <div className="App">
        <AuthProvider value={{ authUser }}>
        <BrowserRouter>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/sobre" element={authUser ? <Sobre /> : <Navigate to="/login"/>}/>
              <Route path="/preservacao" element={authUser ? <Preservacao /> : <Navigate to="/login"/>}/>
              <Route path="/registro" element={!authUser ? <Register /> : <Navigate to="/"/>}/>
              <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/"/>}/>
            </Routes>
          </div>
          <Footer />
          <Routes>
            <Route path='/conservacao_ecossistemas' element={authUser ? <Ecossistemas /> : <Navigate to="/login"/>}/>
            <Route path='/equilibrio-recursos' element={authUser ? <Recursos /> : <Navigate to="/login"/>}/>
            <Route path='/combate-poluicao' element={authUser ? <Poluicao /> : <Navigate to="/login"/>}/>
            <Route path='/reciclagem' element={authUser ? <Reciclagem /> : <Navigate to="/login"/>}/>
            <Route path='/plantar-arvores' element={authUser ? <Arvores /> : <Navigate to="/login"/>}/>
            <Route path='/transportes-sustentaveis' element={authUser ? <Transportes /> : <Navigate to="/login"/>}/>
            <Route path='/limpeza-hidricos' element={authUser ? <Limpeza /> : <Navigate to="/login"/>}/>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;