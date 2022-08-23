import React, {useState} from 'react'
import '../styles/components/contact.sass'
import { ReactComponent as Logo } from '../image/logo.svg';
import { ReactComponent as IconFacebook } from '../image/iconFacebook.svg';
import { ReactComponent as IconInstagram } from '../image/iconInstagram.svg';
import { ReactComponent as IconWhatsapp } from '../image/iconWhatsapp.svg';

export function Contact() {
    async function Teste(event){
        event.preventDefault()
    }

    const[redesocial, setRedesocial] = useState(false)

  return (
    <div id="contact">
        <div className="contentCondacs2">
            <div className="contentCondacs">
                <div className="contentContact">
                    <p>Contato</p>
                    <div className="details"></div>
                    <form onSubmit={Teste}>
                        <input type="email"  required  placeholder="Seu Email" className="inputs"></input>
                        <input type="text"   required  placeholder="Seu Nome" className="inputs"></input>
                        
                        <input type="text" required  placeholder="Sua Mensagem" className="inputs"></input>
                        <button type="submit" className='enviar'>
                            <h1>Enviar</h1>
                        </button>
                    </form>
                    <div className="windowSocial">
                            <a href="https://www.facebook.com/Condacs-Contabilidade-103618002125801/" rel="noreferrer" target="_blank">
                            <IconFacebook />
                            </a>
                            <a href="https://www.instagram.com/condacs/"  rel="noreferrer" target="_blank">
                                <IconInstagram  className="middleIcon"/>
                            </a>
                            <div onClick={() => setRedesocial(!redesocial)}>
                                <IconWhatsapp className="activeModal"/>
                            </div>
                    </div>
                </div>
                
                <div className={redesocial ? "contenteSocialCell" : "contentSocial"} onClick={() => {redesocial ? setRedesocial(!redesocial) : setRedesocial(redesocial)}}>
                    <div className="modal">
                        <h3>{redesocial ? "Nossos numeros" : "Sociais"}</h3>
                        <div className="details"></div>
                        <div className="networkSocial">
                            <a href="https://www.facebook.com/Condacs-Contabilidade-103618002125801/" rel="noreferrer" target="_blank">
                                <IconFacebook />
                            </a>

                            <a href="https://www.instagram.com/condacs/"  rel="noreferrer" target="_blank">
                                <IconInstagram />
                            </a>
                        </div>

                        <p>Advocacia</p>
                        <div className="whatsapp">
                            <IconWhatsapp />
                            <h2>(16) 99999-9999</h2>
                        </div>

                        <p>Financeiro</p>
                        <div className="whatsapp">
                            <IconWhatsapp />
                            <h2>(16) 99999-9999</h2>
                        </div>

                        <p>Contabilidade</p>
                        <div className="whatsapp">
                            <IconWhatsapp />
                            <h2>(16) 99999-9999</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="navBar">
            <div className="contentNavBar">
                <p>Todos os direitos reservados @2022</p>
                <Logo />
            </div>    
        </div>  
    </div>
  )
}
