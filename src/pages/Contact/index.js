import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import instagram from '../../assets/images/icons/insta.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import whatsApp from '../../assets/images/icons/whatsappp.svg';
import mail from '../../assets/images/icons/mail.svg';
import './styles.css';

function Contact() {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    function handleSendMessage(e) {
        e.preventDefault();
        const link = `https://api.whatsapp.com/send?phone=+5554997024574&text=Meu nome é ${name}, moro em ${city}, ${message}. Meus contatos de WhatsApp: ${whatsapp} e e-mail: ${email}`;
        window.open(link, "_blank");
        setName('');
        setCity('');
        setMessage('');
        setWhatsapp('');
        setEmail('');
    };

    const [scroll, setScroll] = useState('hidden');
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY < 60) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div id="page-contact" className="container">
            <PageHeader logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-contact-content" className="page-contact-content">
                    <div id="page-contact-data" className="contact-data">
                        <p>Já conhece e segue nossas redes sociais?
                            <br /><br />
                            Seja no Instagram ou no Facebook você confere nossos produtos e lançamentos de maneira mais informativa e dinâmica.
                        </p>
                        <br />
                        <div className="contact-social-group">
                            <img src={instagram} alt="modemoveis" />
                            <a href="https://www.instagram.com/moveismode" target="_blank" rel="noopener noreferrer">instagram.com/moveismode</a>
                        </div>
                        <div className="contact-social-group">
                            <img src={facebook} alt="modemoveis" />
                            <a href="https://www.facebook.com/moveismode" target="_blank" rel="noopener noreferrer">facebook.com/moveismode</a>
                        </div>
                        <div className="contact-social-group">
                            <img src={mail} alt="comercial@modemoveis.com.br" />
                            <a href="mailto:comercial@modemoveis.com.br" >comercial@modemoveis.com.br</a>
                        </div>
                        <div className="contact-social-group">
                            <img src={whatsApp} alt="instagram" />
                            <a href="https://api.whatsapp.com/send?phone=+5554997024574&text=Estou entrando em contato através do site, " target="_blank" rel="noopener noreferrer"> (054) 9 9702-4574</a>
                        </div>
                        <br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223103.5763828234!2d-51.67571932656326!3d-29.10587677411645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c234b0cb91f61%3A0x4b97c55bc72ac8da!2sBento%20Gon%C3%A7alves%20-%20RS!5e0!3m2!1sen!2sbr!4v1597865323142!5m2!1sen!2sbr"
                            width="100%"
                            height="300"
                            frameborder="0"
                            title="map"
                            aria-hidden="false" />
                    </div>
                    <div id="page-contact-form" className="page-contact-form">
                        <form onSubmit={handleSendMessage}>
                            <fieldset>
                                {/*<legend>Preencha o formulário abaixo e clique em "enviar", que em até 48 horas úteis, um de nossos consultores entrará em contato com você.</legend>*/}
                                <legend>Preencha seus dados abaixo para e inicie uma conversa via WhatsApp conosco, responderemos seu contato em até 24 horas!</legend>
                                <Input
                                    required
                                    name="name"
                                    label="Nome completo*"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                <Input
                                    required
                                    name="email"
                                    label="Seu melhor e-mail*"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    type="email"
                                    maxlength="255"
                                />
                                <Input
                                    required
                                    name="whatsapp"
                                    label="WhatsApp*"
                                    value={whatsapp}
                                    onChange={(e) => { setWhatsapp(e.target.value) }}
                                />
                                <Input
                                    required
                                    name="cidade"
                                    label="Cidade - Estado(UF)"
                                    value={city}
                                    onChange={(e) => { setCity(e.target.value) }}
                                />
                                <Textarea
                                    required
                                    name="mensagem"
                                    label="Mensagem"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </fieldset>
                            <footer>
                                <button type="submit">Iniciar Conversa no WhatsApp</button>
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