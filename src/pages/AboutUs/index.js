import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import './styles.css';

function AboutUs() {
    return (
        <div id="page-about" className="container ">
            <PageHeader ></PageHeader>
            <main>
                <div id="page-about-content">
                    <div className="section-about">
                        <div className="section-about-title">
                            <h2>Idealizada em Bento Gonçalves na Serra Gaúcha no ano de 2020</h2>
                        </div>
                        <div className="section-mv">
                            <div className="section-m">
                                <h1>Quem</h1>
                                <h3>Somos?</h3>
                                <p>A Mode é uma empresa jovem inspirada em produzir produtos com paixão e dedicação para iluminar ainda mais os lares dos nossos clientes.</p>
                            </div>
                            <div className="section-m">
                                <h1>O que</h1>
                                <h3>Fazemos?</h3>
                                <p>Criamos, produzimos e vendemos móveis complementares de bom design, qualidade e sofisticação na produção e acabamento dos produtos que é feito 100% manual.</p>
                            </div>
                            <div className="section-m">
                                <h1>Como</h1>
                                <h3>Adquirir?</h3>
                                <p>Você pode entrar em contato conosco clicando em Contate-nos. Ficaremos felizes em poder lhe atender e fazer o melhor possível para que você se sinta em casa.</p>
                            </div>
                            <div className="section-m">
                                <h1>Missão</h1>
                                <p>Oferecer a nossos clientes o que tem de melhor em móveis complementares e de decoração para proporcionar aconchego com design, qualidade e sofisticação em nossos produtos.</p>
                            </div>
                            <div className="section-m">
                                <h1>Visão</h1>
                                <p>Ser a melhor empresa em móveis complementares e de decoração inovadora para ambientes.</p>
                            </div>
                            <div className="section-m">
                                <h1>Valores</h1>
                                <p>Comprometimento, Qualidade, Eficiência, Inovação, Transparência, Prazer em servir nossos clientes</p>
                            </div>
                        </div>
                        <div className="section-about-link">
                            <Link to="contact">Contate-nos</Link>
                        </div>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default AboutUs;