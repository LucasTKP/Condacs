import React from 'react'
import '../styles/components/services.sass'
import handWithCell from '../image/handWithCell.png'
import { useNavigate } from "react-router-dom";

export function Services() {
  let navigate = useNavigate();
  return (
    <div id="services">
      <div className="textServices">
        <p>Nossos Serviços</p>
        <div className='details'></div>
        <p>Temos serviços projetados para o atender e dar suporte em qualquer fase de sua empresa.</p>
        <a href="#pageServices" className='ButtonPageService' onClick={() => navigate('/PageServices/')}>
            Serviços
        </a>
      </div>
      <img src={handWithCell} alt="Mão segurando um celular"></img>
      
    </div>
  )
}
