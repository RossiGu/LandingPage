import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Preservacao from './pages/Preservacao/Preservacao'
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
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/preservacao" element={<Preservacao />}/>
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
