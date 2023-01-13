import React, { useState } from 'react'
import "../styles/components/PageServices.sass"
import { ReactComponent as LogoCondacs } from '../image/logoCondacs.svg';
import { ReactComponent as Logo2Core } from '../image/logo.svg';
import { useNavigate } from "react-router-dom";
import { useAllPrismicDocumentsByType } from '@prismicio/react'


export function PageService() {
  const [documents] = useAllPrismicDocumentsByType("homepage");
  const [headerVisible, setHeaderVisible] = useState(false)
  const [textTypeServices, setTextTypeServices] = useState("contabil")
  let navigate = useNavigate();
  return (
    <div id="pageServices">
      <div className="imageServices">
          <div className='config'>
            <div className='header'>
                <LogoCondacs onClick={() => navigate("/")}/>
                <button className={headerVisible ? 'hamburguerClose' : "hamburguer"} onClick={() => setHeaderVisible(!headerVisible)}></button>
                <div className={headerVisible ? "navigationCascata" : 'navigation'}>
                      <a href="#about" onClick={() => (setHeaderVisible(!headerVisible) & navigate('/'))}>Sobre</a>
                      <a href="#services" onClick={() => (setHeaderVisible(!headerVisible) & navigate('/'))} >Serviços</a>
                      <a href="#contact"onClick={() => (setHeaderVisible(!headerVisible) & navigate('/'))} >Contato</a>
                      <a href='https://condacs.vercel.app/' className='buttonLogin'>Login</a>
                </div>
            </div>
            <div className="textServices">
              <h1>Serviços</h1>
            </div>
          </div>
      </div>
      
      <div className="outConfig">
        <div className="config2">
          <div className="initialTextBox">
            <p>Conheça um pouco mais sobre o que nós podemos lhe oferecer!</p>
            <div className="details"></div>
          </div>
            <div className="contentBox">
              <div className='typeServices' >
                <p className={textTypeServices === 'contabil' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("contabil")}>Contábil</p>
                <p className={textTypeServices === 'fiscal' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("fiscal")}>Fiscal</p>
                <p className={textTypeServices === 'trabalhista' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("trabalhista")}>Trabalhista</p>
                <p className={textTypeServices === 'auditoria' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("auditoria")}>Auditoria</p>
                <p className={textTypeServices === 'imposto' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("imposto")}>Imposto Ren.</p>
                <p className={textTypeServices === 'societario' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("societario")}>Societária</p>
                <p className={textTypeServices === 'empresas' ? 'ButtonSelect' : "ButtonPadrao"} onClick={ () => setTextTypeServices("empresas")}>Abert. Empresas</p>
              </div>
              <div className="box">
                <div className='circle'></div>
                  {documents ? <>
                  <ul className={textTypeServices === 'contabil' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.contabil.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'fiscal' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.fiscal.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'trabalhista' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.trabalhista.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'auditoria' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.auditoria.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'imposto' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.imposto.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'societario' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.societaria.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul>

                  <ul className={textTypeServices === 'empresas' ? 'textVisible' : "textInvisible"}>
                    {documents[0].data.empresas.map((li) => {
                      return <li key={li.text} className="textBox">{li.text}</li>
                    })}
                  </ul></> : ''}
              </div>
            </div>
        </div>
      </div>
        <div className='navBar'>
          <div className='contentNavBar'>
            <p>Todos os direitos reservados @2022</p>
            <div>
              <Logo2Core />
            </div>
            
          </div>
        </div>
    </div>   
  )
}

