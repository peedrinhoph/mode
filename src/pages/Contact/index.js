import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';

import facebook from '../../assets/images/icons/facebook.svg';
import insta from '../../assets/images/icons/insta.svg';
import whatsapp from '../../assets/images/icons/whatsappp.svg';
import aparador from '../../assets/images/aparador1.jpg';

import './styles.css';

function Contact() {
    const [scroll, setScroll] = useState('hidden');

    useEffect(() => {
        window.onscroll = () => handleScroll()
    }, []);

    function handleScroll() {
        if (document.documentElement.scrollTop > 130) {
            setScroll({ className: 'show' })
        }

    }
    return (
        <div id="page-contact" className="container">
            <PageHeader title="contate-nos" />
            <main>
                <div id="page-contact-content" className="container">

                    <div id="page-contact-data" className="contact-data">
                        <p>Se ainda tiver alguma dúvida, não hesite em entrar em contato!</p>
                        <br />
                        <p className="contact-phone">WhatsApp - <a href="https://api.whatsapp.com/send?phone=054996448912&text=Estou entrando em contato através do site, " target="_blank"> (054) 9 9644-8912</a></p>
                        <p className="contact-mail">E-mail - <a href="mailto:contact@moveismode.com.br" >contact@moveismode.com.br</a></p>
                        <p className="contact-social">Facebook - <a href="https://www.facebook.com/moveismode" target="_blank">@moveismode</a></p>
                        <p className="contact-social">Instagram - <a href="https://www.instagram.com/moveismode" target="_blank">@moveismode</a></p>
                        <br />
                        <p>Atenciosamente,</p>
                        <p>Mode</p>
                    </div>
                    <div id="page-contact-form" className="page-contact-form">
                        <form>
                            <fieldset>
                                <legend>Sua mensagem</legend>
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
        </div>
    )
}

export default Contact;