import React, { useState } from 'react'
import "../styles/components/PageServices.sass"
import { ReactComponent as LogoCondacs } from '../image/logoCondacs.svg';
import { ReactComponent as Logo2Core } from '../image/logo.svg';
import { useNavigate } from "react-router-dom";


export function PageService() {
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
                  <ul className={textTypeServices === 'contabil' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Demonstrativo do Resultado do Exercício — DRE;</li>
                    <li className='textBox'>Registro de apuração dos impostos;</li>
                    <li className="textBox">Balancete;</li>
                    <li className="textBox">Balanço Patrimonial;</li>
                    <li className="textBox">Conciliação bancária;</li>
                    <li className="textBox">Entre outros.</li>
                  </ul>

                  <ul className={textTypeServices === 'fiscal' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Efetua cálculos relacionados ao patrimônio da empresa, PIS e COFINS, IMP DE RENDA e CONT. SOCIAL.</li>
                    <li className='textBox'>Apuração de lucros/Prejuizos, registros...</li>
                    <li className="textBox">Evitando sonegação fiscal, adulteração de patrimônio e qualquer outro tipo de fraude.</li>
                  </ul>

                  <ul className={textTypeServices === 'trabalhista' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Apurar e emitir holerits dos colaboradores;</li>
                    <li className='textBox'>Calcular o recibo do proprietário da empresa;</li>
                    <li className="textBox">Processar a Folha de Pagamento </li>
                    <li className="textBox">Preencher o Cadastro Geral de Empregados e Desempregados (CAGED). </li>
                    <li className="textBox">Todas as informações relacinadas ao E-Social </li>
                  </ul>

                  <ul className={textTypeServices === 'auditoria' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Exame de documentos contábeis (fluxo de caixa, Demonstração de Resultado de Exercício e balanço patrimonial);</li>
                    <li className='textBox'>Apuração de informações junto a fontes externas;</li>
                    <li className="textBox">Inspeções internas.</li>
                  </ul>

                  <ul className={textTypeServices === 'imposto' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Elaboração da Declaração do Imposto de Renda Pessoa Física e Jurídica;</li>
                    <li className='textBox'>Realização dos cálculos referentes ao imposto de renda e organização de todos esses tributos.</li>
                    <li className="textBox">Análise, orientação e controle da aplicação dos dispositivos legais vigentes;</li>
                    <li className="textBox">Elaboração da DIRF</li>
                  </ul>

                  <ul className={textTypeServices === 'societario' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Constituição e encerramento de empresas;</li>
                    <li className='textBox'>Legalização de empresas nos Órgãos Públicos;</li>
                    <li className="textBox">Elaboração de Contratos Sociais em acordo ao novo código civil;</li>
                    <li className="textBox">Obtenção de Alvarás e Licenças junto a Prefeitura;</li>
                    <li className="textBox">Obtenção de Certidões Negativas.</li>
                    <li className="textBox">Abertura de Igrejas e Associações</li>
                  </ul>

                  <ul className={textTypeServices === 'empresas' ? 'textVisible' : "textInvisible"}>
                    <li className="textBox">Definição dos códigos CNAE (Classificação Nacional de Atividades Econômicas);</li>
                    <li className='textBox'>Escolha da natureza jurídica;</li>
                    <li className="textBox">Definição do porte da empresa;</li>
                    <li className="textBox">Escolha do regime tributário e verificação das alíquotas de imposto.</li>
                    <li className="textBox">Desenquadramento e Transformação de MEI para MICROEMPRESA</li>
                  </ul>
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

