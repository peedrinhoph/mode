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
                        <div className="section-product">
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/19/195/195g9m.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Do projeto à execução</h3>
                                </div>
                                <p>Clique aqui e comece a escrever. Illo inventore veritatis et quasi architecto beatae vitae.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/0j/0jc/0jc3z2.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Materiais de primeira</h3>
                                </div>
                                <p>Clique aqui e comece a escrever. Illo inventore veritatis et quasi architecto beatae vitae.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/3w/3wu/3wunxe.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>Clique aqui e comece a escrever. Illo inventore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                    </div>
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