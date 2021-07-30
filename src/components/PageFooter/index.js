import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/images/icons/insta.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import whatsApp from '../../assets/images/icons/whatsappp.svg';
import whats from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const PageHeader = (props) => {
    useEffect(() => {
        goTop();
    }, []);

    function goTop() {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="page-footer">
            <div className="page-go-top">
                <p onClick={() => goTop()}>Voltar ao topo</p>
            </div>

            <div className="page-footer-all">
                <div className="page-footer-group">
                    <h2>Galeria do cliente <span>EM BREVE</span></h2>
                    <p>Poste uma foto do seu produto Mode</p>
                    <p>nas redes sociais marcando <b>@moveismode</b> e</p>
                    <p>as fotos selecionadas irão aparecer em nosso site :D</p>
                </div>
                <div className="page-footer-group">
                    <h2>Atendimento</h2>
                    <p>Segunda á Sexta 8:00h – 18:00h</p>
                    <p>Sábado 8:00h – 12:00h</p>
                </div>
                <div className="page-footer-group">
                    <h2>Menu</h2>
                    <Link to="/">Inicio</Link>
                    <Link to="/portfolio">Portfólio</Link>
                    <Link to="/portfolio/show-more/finishing">Acabamentos</Link>
                    <Link to="/about-us">Quem somos</Link>
                    <Link to="/contact">Contato</Link>
                </div>

                <div className="page-footer-group">
                    <h2>Contatos</h2>
                    <p>+55 (54) 9 9702-4574</p>
                    <p><a href="mailto:comercial@modemoveis.com.br" >comercial@modemoveis.com.br</a></p>
                    <p>Poste uma foto e marque a <b>@moveismode</b></p>
                    <div className="page-footer-social">
                        <a href="https://www.instagram.com/moveismode/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} className="instagram" alt="instagram" />
                        </a>
                        <a href="https://www.instagram.com/moveismode/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} className="facebook" alt="facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+5554997024574&text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site," target="_blank" rel="noopener noreferrer">
                            <img src={whatsApp} className="whatsapp" alt="whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-footer-copyright">
                <p>&copy; Copyright 2020 - {(new Date().getFullYear())} todos os direitos reservados. Desenvolvido por <a href="https://www.linkedin.com/in/pedro-pereira-62056883/" target="_blank" rel="noopener noreferrer">Pedro Henrique Pereira - Linkedin</a></p>
            </div>
            <div className="tooltip">
                <h3>Como posso ajudar?</h3><br />
                {/*<p><Link to="/contact" className="tooltip-link">Agradeçemos a visita em nosso site, caso tenha qualquer dúvida contate-nos clicando aqui.</Link></p>*/}
                <p><a href="https://api.whatsapp.com/send?phone=+5554997024574&text=Olá! Quero comprar na Mode Móveis" target="_blank" rel="noopener noreferrer" className="tooltip-link">Clique aqui e compre pelo <b>WhatsApp</b> sem sair de casa!</a></p>
                <span className="tooltip-span"><img src={whats} className="whatsapp" alt="whatsapp" /></span>
            </div>
        </footer>
    );
}

export default PageHeader
