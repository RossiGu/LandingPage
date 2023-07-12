import React from 'react'
import './Home.css'
import image from '../../images/homeImage.png'
import auth from '../../firebase/config'
import { useAuthValue } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const { authUser } = useAuthValue()

  return (
    <div className='home'>
      <div className='content'>
        <h2>Construa um futuro melhor</h2>
        <p>Descubra maneiras simples e práticas de preservar o meio ambiente e contribuir para um futuro sustentável.</p>
        {!authUser && (
            <>
              <Link to="/login">
                <button className='btnContent'>Junte-se agora!</button>
              </Link>
            </>
          )}
          {authUser && (
             <>
             <Link to="/preservacao">
               <button className='btnContent'>Junte-se agora!</button>
             </Link>
           </>
          )}
      </div>
      <div className='contentImage'>
        <img src={image} alt="Imagem" />
      </div>
    </div>
  )
}

export default Home