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
          <Link to='/'>
            <h2>Conservação de ecossistemas<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={recursos} alt="" />
          <Link to='/'>
            <h2>Equilíbrio de recursos naturais<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={poluicao} alt="" />
          <Link to='/'>
            <h2>Combate a poluição<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={reciclagem} alt="" />
          <Link to='/'>
            <h2>Reciclagem<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={arvore} alt="" />
          <Link to='/'>
            <h2>Plantar árvores<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={transporte} alt="" />
          <Link to='/'>
            <h2>Transportes sustentáveis<br /></h2>
          </Link>
        </div>
        <div className='style'>
          <img src={rios} alt="" />
          <Link to='/'>
            <h2>Limpeza dos corpos hídricos<br /></h2>
          </Link>
        </div>
      </div>
  </div>
    
  )
}

export default Preservacao