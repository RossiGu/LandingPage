import './Preservacao.css'
import eco from '../../images/imagesPage/eco.png'
import recursos from '../../images/imagesPage/recursos.png'
import poluicao from '../../images/imagesPage/poluicao.png'
import reciclagem from '../../images/imagesPage/reciclagem.png'
import arvore from '../../images/imagesPage/arvore.png'
import transporte from '../../images/imagesPage/transporte.png'
import rios from '../../images/imagesPage/rios.png'
import { Link } from 'react-router-dom'

const Preservacao = () => {
  return (

  <div className='contentP'>
    <div className='title'>
      <h2>Algumas maneiras de preservar o nosso meio ambiente!</h2>
    </div>
      <div className='contentStyle'>
        <div className='style'>
          <img src={eco} alt="" />
          <Link to='/conservacao-ecossistemas'>
            <h2>Conservação de ecossistemas &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={recursos} alt="" />
          <Link to='/equilibrio-recursos'>
            <h2>Equilíbrio de recursos naturais &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={poluicao} alt="" />
          <Link to='/combate-poluicao'>
            <h2>Combate a poluição &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={reciclagem} alt="" />
          <Link to='/reciclagem'>
            <h2>Reciclagem &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={arvore} alt="" />
          <Link to='/plantar-arvores'>
            <h2>Plantar árvores &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={transporte} alt="" />
          <Link to='/transportes-sustentaveis'>
            <h2>Utilização de transportes sustentáveis &#10141;<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={rios} alt="" />
          <Link to='/limpeza-hidricos'>
            <h2>Limpeza dos corpos hídricos &#10141;<br /></h2>
          </Link>
        </div>
      </div>
  </div>
    
  )
}

export default Preservacao