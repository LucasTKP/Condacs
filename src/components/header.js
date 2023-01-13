import React, {useState} from 'react'
import '../styles/components/header.sass'
import { ReactComponent as Logo } from '../image/logoCondacs.svg';

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export function Header() {
  const [visible, setVisible] = useState(false)
  const [documents] = useAllPrismicDocumentsByType("homepage");

  return (
    <div className="background">
      <div className='config'>
        <div className='header'>
          <Logo/>
          <button className={visible ? 'hamburguerClose' : "hamburguer"} onClick={() => setVisible(!visible)}></button>
          <div className={visible ? "navigationCascata" : 'navigation'}>
                <a href="#about" onClick={() => setVisible(!visible)} className="buttonsNavigation">Sobre</a>
                <a href="#services" onClick={() => setVisible(!visible)} >Serviços</a>
                <a href="#contact"onClick={() => setVisible(!visible)} >Contato</a>
                <a href='https://portal.condacs.com/' className="buttonLogin">Login</a>
          </div>
        </div>

        {documents ? 
        <div className="nameCompany">
          <p>{documents[0].data.titulo[0].text}</p>
          <p>{documents[0].data.subtitulo[0].text}</p>
        </div> :
        <div></div>
        }
        
        <a href="#contact">
        <button className="buttonContato">
            <p>Contate-nos</p>
        </button>
        </a>
        
      </div>
    </div>
  )
}
