import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/Mode-Móveis-4.png';
//import logoImg from '../../assets/images/logo.jpg';
import instagram from '../../assets/images/icons/insta.svg';
import facebook from '../../assets/images/icons/facebook.svg';

import './styles.css';
/** <a href="https://www.instagram.com/moveismode/" target="_blank" className="study">
                    <img src={instagram} className="study" alt="study" />
                </a>
                <a href="https://www.instagram.com/moveismode/" target="_blank" className="study">
                    <img src={facebook} className="study" alt="study" />
                </a> */
const PageHeader = (props) => {
    return (
        <header className="page-header">
            <div id="logo-and-menu" className="logo-and-menu">
                    <img id="logo" className="logo" src={logoImg} alt="Mode" />
                <nav id="menu" className="menu">
                    <ul id="navmenu" className="navmenu">
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="portfolio">Portfólio</Link></li>
                        <li><Link to="about-us">Quem somos</Link></li>
                        <li><Link to="contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>{props.children}
            </div>
        </header>
    );
}

export default PageHeader
