import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/Mode-Moveis-4.png';
import instagram from '../../assets/images/icons/insta.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import whatsApp from '../../assets/images/icons/whatsappp.svg';

import './styles.css';

const PageHeader = (props) => {
    return (
        <header className={props.colorTransparent ? "page-header" : "page-header page-header-black"}>
            <div className='sub-header'>
                <div className='sub-header-redes'>
                    {/* <ul className='sub-header-redes-nav'>
                        <li>
                            <a href="https://www.facebook.com/moveismode/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} className="facebook" alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/moveismode/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} className="instagram" alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=+5554997024574&text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site," target="_blank" rel="noopener noreferrer">
                                <img src={whatsApp} className="whatsapp" alt="whatsapp" />
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div className='sub-header-contato'>
                    <ul className='sub-header-contato-nav'>
                        <li>
                            <p>
                                <a href="mailto:comercial@modemoveis.com.br" >Contate-nos: comercial@modemoveis.com.br</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="logo-and-menu" className="logo-and-menu">
                <img id={props.logoAnimation ? "logo" : "logo-6rem"} className="logo" src={logoImg} alt="Mode" />
                <nav id="menu" className="menu" >
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="navmenu" className="navmenu">
                            <li className="line-hover"><Link to="/">Início</Link></li>
                            <li className="line-hover"><Link to="/portfolio">Produtos</Link></li>
                            <li className="line-hover"><Link to="/acabamento">Acabamentos</Link></li>
                            <li className="line-hover"><Link to="/about-us">Empresa</Link></li>
                            <li className="line-hover"><Link to="/contact">Contato</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>{props.children}
            </div>
        </header>
    );
}

export default PageHeader
