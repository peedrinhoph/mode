import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/Mode-Moveis-4.png';

import './styles.css';

const PageHeader = (props) => {
    return (
        <header className={props.colorTransparent ? "page-header" : "page-header page-header-black"}>
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
                            <li className="line-hover"><Link to="/portfolio">Portfólio</Link></li>
                            <li className="line-hover"><Link to="/portfolio/show-more/finishing">Acabamentos</Link></li>
                            <li className="line-hover"><Link to="/about-us">Institucional</Link></li>
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
