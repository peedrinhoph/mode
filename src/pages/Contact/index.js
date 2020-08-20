import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './styles.css';

function Contact() {
    
    return (
        <div id="page-contact" className="container">
            <PageHeader title="" />
            <main>
                <div id="page-contact-content" className="container">

                    <div id="page-contact-data" className="contact-data">
                        <p id="contact-title">Olá, se ainda tiver qualquer dúvida sobre nossos produtos<br /> não hesite em entrar em contato!</p>
                        <br />
                        <p id="contact-phone">Contato direto via WhatsApp: <a href="https://api.whatsapp.com/send?phone=054996448912&text=Estou entrando em contato através do site, " target="_blank"> (054) 9 9644-8912</a></p>
                        <p id="contact-mail">E-mail: <a href="mailto:contact@moveismode.com.br" >contact@moveismode.com.br</a></p>
                        <br />
                        <p id="contact-instagram">Instagram: <a href="https://www.instagram.com/moveismode" target="_blank">@moveismode</a></p>
                        <p id="contact-facebook">Facebook: <a href="https://www.facebook.com/moveismode" target="_blank">@moveismode</a></p>
                        <br />
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223103.5763828234!2d-51.67571932656326!3d-29.10587677411645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c234b0cb91f61%3A0x4b97c55bc72ac8da!2sBento%20Gon%C3%A7alves%20-%20RS!5e0!3m2!1sen!2sbr!4v1597865323142!5m2!1sen!2sbr" 
                        width="100%" 
                        height="300" 
                        frameborder="0" 
                        aria-hidden="false"/>
                       
                    </div>
                    <div id="page-contact-form" className="page-contact-form">
                        <form>
                            <fieldset>
                                <legend>contate-nos</legend>
                                <Input
                                    name="name"
                                    label="Nome completo"
                                //value={name}
                                //onChange={(e) => { setName(e.target.value) }} 
                                />

                                <Input
                                    name="whatsapp"
                                    label="WhatsApp"
                                //onChange={(e) => { setWhatsapp(e.target.value) }} 
                                />

                                <Textarea
                                    name="mensagem"
                                    label="Mensagem"
                                //onChange={(e) => { setBio(e.target.value) }} 
                                />
                            </fieldset>
                            <footer>
                                <button type="submit">Enviar</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default Contact;