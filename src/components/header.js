import React from 'react'
import '../styles/components/header.sass'
import { ReactComponent as Logo } from '../image/logoCondacs.svg';

export function Header() {
  return (
    <div className="background">
      <div className='config'>
        <div className='header'>
          <Logo />
          <div className='navigation'>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#contact">Contato</a>
            <a href="#Login">Login</a>
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
