import React, {useState, useRef} from 'react'
import '../styles/components/contact.sass'
import { ReactComponent as Logo } from '../image/logo.svg';
import { ReactComponent as IconFacebook } from '../image/iconFacebook.svg';
import { ReactComponent as IconInstagram } from '../image/iconInstagram.svg';
import { ReactComponent as IconWhatsapp } from '../image/iconWhatsapp.svg';
import emailjs from '@emailjs/browser';

export function Contact() {
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

                        <p>Contabilidade</p>
                        <div className="whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=5516993344700" rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>(16) 99334-4700</h2>
                        </div>

                        <p>Fiscal</p>
                        <div className="whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=5516994423535" rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>(16) 99442-3535</h2>
                        </div>

                        <p>Depto Pessoal</p>
                        <div className="whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=5516993303636" rel="noreferrer" target="_blank">
                                <IconWhatsapp />
                            </a>
                            <h2>(16) 99330-3636</h2>
                        </div>

                        <p>Escritorio</p>
                        <div className="whatsapp">
                            <h3>📞</h3>
                            <h2>(16) 3725-2500</h2>
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
