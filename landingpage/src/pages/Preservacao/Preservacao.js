import './Preservacao.css'
import eco from '../../images/imagesPage/eco.png'
import recursos from '../../images/imagesPage/recursos.png'
import poluicao from '../../images/imagesPage/poluicao.png'
import reciclagem from '../../images/imagesPage/reciclagem.png'
import arvore from '../../images/imagesPage/arvore.png'
import transporte from '../../images/imagesPage/transporte.png'
import rios from '../../images/imagesPage/rios.png'

const Preservacao = () => {
  return (
    <div className='contentP'>
      <div className='title'>
        <h2>Algumas maneiras de preservar o nosso meio ambiente!</h2>
      </div>
      <div className='style'>
        <img src={eco} alt="" />
        <h2>Conservação de ecossistemas<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={recursos} alt="" />
        <h2>Equilíbrio de recursos naturais<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={poluicao} alt="" />
        <h2>Combate a poluição<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={reciclagem} alt="" />
        <h2>Reciclagem<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={arvore} alt="" />
        <h2>Plantar árvores<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={transporte} alt="" />
        <h2>Transportes sustentáveis<br /><p>Veja mais</p></h2>
      </div>
      <div className='style'>
        <img src={rios} alt="" />
        <h2>Limpeza dos corpos hídricos<br /><p>Veja mais</p></h2>
      </div>
    </div>
  )
}

export default Preservacao