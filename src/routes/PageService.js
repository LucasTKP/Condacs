import React, { useState } from 'react'
import "../styles/components/PageServices.sass"
import { ReactComponent as LogoCondacs } from '../image/logoCondacs.svg';
import { ReactComponent as Logo2Core } from '../image/logo.svg';


export function PageService() {
  const [visible, setVisible] = useState(false)
  return (
    <div id="pageServices">
      <div className="imageServices">
          <div className='config'>
            <div className='header'>
                <LogoCondacs />
                <button className={visible ? 'hamburguerClose' : "hamburguer"} onClick={() => setVisible(!visible)}></button>
                <div className={visible ? "navigationCascata" : 'navigation'}>
                      <a href="#about" onClick={() => setVisible(!visible)} >Sobre</a>
                      <a href="#services" onClick={() => setVisible(!visible)} >Serviços</a>
                      <a href="#contact"onClick={() => setVisible(!visible)} >Contato</a>
                      <button>Login</button>
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
                <p>Contábil</p>
                <p>Fiscal</p>
                <p>Trabalhista</p>
                <p>Auditoria</p>
                <p>Imposto Ren.</p>
                <p>Societária</p>
                <p>Abert. Empresas</p>
              </div>
              <div className="box">
                <div className='circle'></div>
                  <p className='textBox'>Demonstrativo do Resultado do Exercício — DRE;  Registro de apuração dos impostos; Balancete; Balanço Patrimonial;  Conciliação bancária; Entre outros.</p>
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

