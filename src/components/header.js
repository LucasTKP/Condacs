import React, {useState} from 'react'
import '../styles/components/header.sass'
import { ReactComponent as Logo } from '../image/logoCondacs.svg';

export function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="background">
      <div className='config'>
        <div className='header'>
          <Logo />
          <button className={visible ? 'hamburguerClose' : "hamburguer"} onClick={() => setVisible(!visible)}></button>
          <div className={visible ? "navigationCascata" : 'navigation'}>
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

        <a href="#contact">
        <button className="buttonContato">
            <p>Contate-nos</p>
        </button>
        </a>
        
      </div>
    </div>
  )
}
