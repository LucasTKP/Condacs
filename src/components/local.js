import React from 'react'
import '../styles/components/local.sass'
import  Maps from '../image/maps.png'
import  ImageCondacs from '../image/imageCondacs.png'
import { ReactComponent as Clock } from '../image/clock.svg'


export function Local() {

  const LinkMaps = "https://www.google.com.br/maps/place/Condacs+Assessoria+Cont%C3%A1bil/@-20.5272228,-47.3693095,19z/data=!3m1!4b1!4m5!3m4!1s0x94b0a579af82d38b:0x2064d9ea7b856fe7!8m2!3d-20.5272241!4d-47.3687623"
  return (
    <div className="local">
        <div className="textLocal">
            <p>Nosso Local</p>
            <p>Localizados em Franca Sp, temos um escritório pronto para lhe acolher!</p>
        </div>
        <div className="images">
          <div>
            <a href={LinkMaps} target="__blank">
            <img src={Maps} className="imageMaps" alt="Imagem da localização no google maps"></img>
            </a>
            <div className="clock">
              <div>
                <Clock />
              </div>
              <p>Abertos de segunda a sexta - 08:00 hrs ás 18:00 hrs</p>
            </div>
          </div>
          <img src={ImageCondacs} className="imageCondacs" alt="Imagem da empresa Condacs"></img>
        </div>
    </div>
  )
}
