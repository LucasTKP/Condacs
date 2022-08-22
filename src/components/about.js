import React from 'react'
import '../styles/components/about.sass'
import { ReactComponent as IconGroup } from '../image/iconGroup.svg';
import { ReactComponent as IconHand } from '../image/iconHand.svg';
import { ReactComponent as IconTrue } from '../image/iconTrue.svg';

export function About() {
  return (
    <div id='about'>
        <div className="textAbout">
            <p>Sobre Nós</p>
            <p>Com mais de 30 anos de experiência na área contabil, conheça nossas principais ideologias:</p>
        </div>

        <div className="buttonAbout">
            <button type="button" className="card">
                <h1>Confiança</h1>
                <IconHand />
                <p>Ver mais</p>
            </button>
            <button type="button" className="card">
                <h1>Qualidade</h1>
                <IconTrue />
                <p>Ver mais</p>
            </button>
            <button type="button" className="card">
                <h1>Equipe</h1>
                <IconGroup />
                <p>Ver mais</p>
            </button>
        </div>

        <div className="contentStatistics">
            <h6>Confira alguns números da Condacs</h6>
            <div className="statistics">
                <div>
                    <h1>100+</h1>
                    <p>Clientes em todo o Brasil</p>
                </div>
                <div>
                    <h1>96%</h1>
                    <p>De taxa de sucesso</p>
                </div>
                <div>
                    <h1>100%</h1>
                    <p>De disponibilidade para você</p>
                </div>
            </div>
            <div className="details"></div>
        </div>    
    </div>
  )
}