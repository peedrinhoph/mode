import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image from '../../assets/images/table-phone.jpg';

import './styles.css';

function Inicio() {
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
        <div id="page-start" className="container">
            <PageHeader />
            <main>
                <div id="page-start-content" className="container">
                    <div className="section">
                        <div className="section-title">
                            <legend>Projetos e produtos</legend>
                        </div>
                        <div className="section-product">
                                <figure>
                                    <img src={Image} alt="product" className="zoom" />
                                </figure>
                                <figure>
                                    <img src={Image} alt="product" className="zoom" />
                                </figure>
                                <figure>
                                    <img src={Image} alt="product" className="zoom" />
                                </figure>
                        </div>
                        <div className="section-ver-mais">
                            <a href="">Ver mais</a>
                        </div>

                    </div>
                </div>
                <span id="mouse"></span>
            </main>
            <PageFooter />
        </div>
    )
}

export default Inicio;