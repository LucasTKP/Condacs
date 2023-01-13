import React, {useState, useRef} from 'react'
import '../styles/components/contact.sass'
import { ReactComponent as Logo } from '../image/logo.svg';
import { ReactComponent as IconFacebook } from '../image/iconFacebook.svg';
import { ReactComponent as IconInstagram } from '../image/iconInstagram.svg';
import { ReactComponent as IconWhatsapp } from '../image/iconWhatsapp.svg';
import { ReactComponent as Telephone } from '../image/telephone.svg';
import emailjs from '@emailjs/browser';
import { useAllPrismicDocumentsByType } from '@prismicio/react'

export function Contact() {
    const [documents] = useAllPrismicDocumentsByType("homepage");
    const form = useRef();
    async function EnviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_wfzeqbq', form.current, 'DpHAZuXmqqhMciFdh')
          .then((result) => {
              alert("Mensagem Enviada com sucesso! :)")
          }, (error) => {
            alert(error.message)
          });
          e.target.reset()
    }

    const[redesocial, setRedesocial] = useState(false)

  return (
    <div id="contact">
        <div className="config">
            <div className="contentCondacs">
                <div className="contentContact">
                    <p>Contato</p>
                    <div className="details"></div>
                    <form ref={form} onSubmit={EnviarEmail}>
                        <input type="email"  required  placeholder="Seu Email" className="inputs" name="email"></input>
                        <input type="text"   required  placeholder="Seu Nome" className="inputs" name="name"></input>
                        <input type="text" required  placeholder="Sua Mensagem" className="inputs" name="message"></input>
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
                        <h3>{redesocial ? "Nossos números" : "Sociais"}</h3>
                        <div className="details"></div>
                        <div className="buttonClose"></div>
                        <div className="networkSocial">
                            <a href="https://www.facebook.com/Condacs-Contabilidade-103618002125801/" rel="noreferrer" target="_blank">
                                <IconFacebook />
                            </a>

                            <a href="https://www.instagram.com/condacs/"  rel="noreferrer" target="_blank">
                                <IconInstagram />
                            </a>
                        </div>
                        {documents ? <><p>Contabilidade</p>
                        <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonecontabilidade[0].text.slice(documents[0].data.telefonecontabilidade[0].text.length - 10).replace('-', '')}`}  rel="noreferrer" target="_blank" className="whatsapp">
                            <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonecontabilidade[0].text.slice(documents[0].data.telefonecontabilidade[0].text.length - 10).replace('-', '')}`} rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>{documents[0].data.telefonecontabilidade[0].text}</h2>
                        </a>

                        <p>Fiscal</p>
                        <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonefiscal[0].text.slice(documents[0].data.telefonefiscal[0].text.length - 10).replace('-', '')}`}  rel="noreferrer" target="_blank" className="whatsapp">
                            <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonefiscal[0].text.slice(documents[0].data.telefonefiscal[0].text.length - 10).replace('-', '')}`} rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>{documents[0].data.telefonefiscal[0].text}</h2>
                        </a>

                        <p>Depto Pessoal</p>
                        <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonepessoal[0].text.slice(documents[0].data.telefonepessoal[0].text.length - 10).replace('-', '')}`}  rel="noreferrer" target="_blank" className="whatsapp">
                            <a href={`https://api.whatsapp.com/send?phone=5516${documents[0].data.telefonepessoal[0].text.slice(documents[0].data.telefonepessoal[0].text.length - 10).replace('-', '')}`} rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>{documents[0].data.telefonepessoal[0].text}</h2>
                        </a>

                        <p>Escritorio</p>
                        <a href={`tel:+5516${documents[0].data.telefoneescritorio[0].text.slice(documents[0].data.telefonepessoal[0].text.length - 9).replace('-', '')}`}  rel="noreferrer" target="_blank" className="whatsapp">
                            <Telephone className="telefone"/>
                            <h2>{documents[0].data.telefoneescritorio[0].text}</h2>
                        </a></> : ''}
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
