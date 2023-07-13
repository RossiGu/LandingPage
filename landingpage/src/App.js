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
        <AuthProvider value={{authUser}}>
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
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;