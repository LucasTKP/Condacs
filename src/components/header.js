import React, {useState} from 'react'
import '../styles/components/header.sass'
import { ReactComponent as Logo } from '../image/logoCondacs.svg';

export function Header() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="background">
      <div className='config'>
        <div className='header'>
          <Logo />
          <button className="hamburguer" onClick={() => setVisible(!visible)}></button>
          <div className={visible ? 'navigation' : "navigationCascata"}>
            <a href="#about" onClick={() => setVisible(!visible)} >Sobre</a>
            <a href="#services" onClick={() => setVisible(!visible)} >Serviços</a>
            <a href="#contact"onClick={() => setVisible(!visible)} >Contato</a>
            <button>Login</button>
          </div>
        </div>

        <div className="nameCompany">
          <p>Condacs</p>
          <p>Acessoria Contábil</p>
        </div>

        <button type="submit" className="buttonContato">
          <p>Contate-nos</p>
        </button>
        
      </div>
    </div>
  )
}
