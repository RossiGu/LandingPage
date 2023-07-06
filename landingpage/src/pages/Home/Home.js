import React from 'react'
import './Home.css'
import image from '../../images/homeImage.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='content'>
        <h2>Construa um futuro melhor</h2>
        <p>Descubra maneiras simples e práticas de preservar o meio ambiente e contribuir para um futuro sustentável.</p>
        <button>Junte-se agora!</button>
      </div>
      <div className='contentImage'>
        <img src={image} alt="Imagem" />
      </div>
    </div>
  )
}

export default Home