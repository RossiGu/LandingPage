import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home'
import Beneficios from './pages/Beneficios/Beneficios'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/beneficios" element={<Beneficios />}/>
            <Route path="/registro" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
