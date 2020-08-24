import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/Mode-Móveis-4.png';

import './styles.css';

const PageHeader = (props) => {
    return (
        <header className="page-header">
            <div id="logo-and-menu" className="logo-and-menu">
                <img id="logo" className="logo" src={logoImg} alt="Mode" />
                <nav id="menu" className="menu">
                    <ul id="navmenu" className="navmenu">
                        <li className="line-hover"><Link to="/">Início</Link></li>
                        <li className="line-hover"><Link to="portfolio">Portfólio</Link></li>
                        <li className="line-hover"><Link to="about-us">Quem somos</Link></li>
                        <li className="line-hover"><Link to="contact">Contato</Link></li>
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
