import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  { AuthProvider } from './contexts/AuthContext'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './firebase/config';


import NavBar from './components/NavBar';
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Preservacao from './pages/Preservacao/Preservacao'
import Footer from './components/Footer';

function App() {

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }

  }, [])


  const signOutUser = () => {
    signOut(auth).then(() => {
      console.log("Saiu com sucesso")
    }).catch(error => console.log(error))
  }

  return (
    <div className="App">
        <AuthProvider value={{authUser}}>
        <BrowserRouter>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/sobre" element={<Sobre />}/>
              <Route path="/preservacao" element={<Preservacao />}/>
              <Route path="/registro" element={<Register />}/>
              <Route path="/login" element={<Login />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;