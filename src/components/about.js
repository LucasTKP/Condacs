import React, { useState }from 'react'
import '../styles/components/about.sass'
import { ReactComponent as IconGroup } from '../image/iconGroup.svg';
import { ReactComponent as IconHand } from '../image/iconHand.svg';
import { ReactComponent as IconTrue } from '../image/iconTrue.svg';
import { ReactComponent as CloseModal } from '../image/closedModal.svg';

export function About() {
    const [modal, setModal] = useState(false)
    const [contentModal, setContentModal] = useState({Title: 'a', Message: ''})

    const GiveContentModal = (type) => {
        if(type === "confianca"){
            setContentModal({...modal, Title: 'Confiança', Message: 'Prezamos acima de tudo a Confiança que o cliente tem conosco, assim atuamos de forma transparente, com ética, honestidade, respeitando todas as leis.'})
        } else if(type === "qualidade"){
            setContentModal({...modal, Title: 'Qualidade', Message: 'Um dos nossos maiores objetivos é fazer sempre o melhor serviço para o cliente proporcionando a satisfação dos mesmos. Nossos anos de experiência vem provando isso!'})
        } else if(type === "equipe"){
            setContentModal({...modal, Title: 'Equipe', Message: 'Fazemos este serviço por mera paixão, com uma equipe focada e com o melhor desempenho do mercado, entregando sempre mais do que o esperado.'})
        }
    }
  return (
    <div id='about'>
        
        <div onClick={() => setModal(!modal)} className={modal ? 'backgroundModalOn' : "backgroundModalOff"}>
            <div id="outModal">
                <button className='modal'>
                    <div>
                        <CloseModal onClick={() => setModal(!modal)}/>
                    </div>
                    <h1>{contentModal.Title}</h1>
                    <p>{contentModal.Message}</p>
                    <div className='detailsModal'></div>
                </button>
            </div>
        </div>
        <div className="textAbout">
            <p>Sobre Nós</p>
            <p>Com mais de 30 anos de experiência na área contabil, conheça nossas principais ideologias:</p>
        </div>
        <div className="config">
        <div className="buttonAbout">
            <a href='#outModal'>
                <button type="button" className="card" onClick={() => (setModal(true) & GiveContentModal('confianca'))}>
                    <h1>Confiança</h1>
                    <IconHand />
                    <p>Ver mais</p>
                </button>
            </a>

            <a href='#outModal'>
                <button type="button" className="card" onClick={() => (setModal(true) &  GiveContentModal('qualidade'))}>
                    <h1>Qualidade</h1>
                    <IconTrue />
                    <p>Ver mais</p>
                </button>
            </a>

            <a href='#outModal'>
                <button type="button" className="card"onClick={() => (setModal(true) & GiveContentModal('equipe'))}>
                    <h1>Equipe</h1>
                    <IconGroup />
                    <p>Ver mais</p>
                </button>
            </a>
        </div>
        </div>

        <div className="contentStatistics">
            <h6>Confira alguns números da Condacs</h6>
            <div className="statistics">
                <div>
                    <h1>250+</h1>
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