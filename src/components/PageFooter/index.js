import React from 'react';

import instagram from '../../assets/images/icons/insta.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import whatsApp from '../../assets/images/icons/whatsappp.svg';

import './styles.css';

const PageHeader = (props) => {
    return (
        <footer className="page-footer">
            <div className="page-footer-all">
                <div className="page-footer-copyright">
                    <p>&copy; Copyright 2020 - {(new Date().getFullYear())} todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/pedro-pereira-62056883/" target="_blank" >Pedro Henrique Pereira - Linkedin</a></p>
                </div>

                <div className="page-footer-social">
                    <a href="https://www.instagram.com/moveismode/" target="_blank">
                        <img src={instagram} className="instagram" alt="instagram" />
                    </a>
                    <a href="https://www.instagram.com/moveismode/" target="_blank" >
                        <img src={facebook} className="facebook" alt="facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-pereira-62056883/" target="_blank">
                        <img src={whatsApp} className="whatsapp" alt="whatsapp" />
                    </a>
                </div>
            </div>


        </footer>
    );
}

export default PageHeader
