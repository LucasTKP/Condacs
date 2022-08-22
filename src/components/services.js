import React from 'react'
import '../styles/components/services.sass'
import handWithCell from '../image/handWithCell.png'

export function Services() {
  return (
    <div id="services">
      <div className="textServices">
        <p className="after">Nossos Serviços</p>
        <div className='details'></div>
        <p>Temos serviços projetados para o atender e dar suporte em qualquer fase de sua empresa.</p>
        <button type='button'>Serviços</button>
      </div>
      <img src={handWithCell} alt="Mão segurando um celular"></img>
      
    </div>
  )
}