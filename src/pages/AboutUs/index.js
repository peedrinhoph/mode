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
                            <h2>Criada em Bento Gonçalves na Serra Gaúcha</h2>
                        </div>
                        <div className="section-mv">
                            <div className="section-m">
                                <h1>Quem</h1>
                                <h3>Somos?</h3>
                                <p>É tida pelo motivo da existência da sua empresa, ou seja, previsão de conquistas futuras e como espera que os clientes vejam a sua empresa.</p>
                            </div>
                            <div className="section-m">
                                <h1>O que</h1>
                                <h3>Fazemos?</h3>
                                <p>Psse princípio está ligado a missão e foca na imagem do futuro que a sua empresa deseja alcançar, ou seja, tem um objetivo de como ela se enxerga lá na frente.</p>
                            </div>
                            <div className="section-m">
                                <h1>Como</h1>
                                <h3>Adquirir?</h3>
                                <p>Pode ser considerado como as motivações da empresa, pense no que faz a sua empresa ser o que é. Quais são os valores (ex.: compromisso, foco, proatividade, dentre outros) da sua empresa?</p>
                            </div>
                            <div className="section-m">
                                <h1>Missão</h1>
                                <p>É tida pelo motivo da existência da sua empresa, ou seja, previsão de conquistas futuras e como espera que os clientes vejam a sua empresa.</p>
                            </div>
                            <div className="section-m">
                                <h1>Visão</h1>
                                <p>Psse princípio está ligado a missão e foca na imagem do futuro que a sua empresa deseja alcançar, ou seja, tem um objetivo de como ela se enxerga lá na frente.</p>
                            </div>
                            <div className="section-m">
                                <h1>Valores</h1>
                                <p>Comprometimento, Qualidade, Excelência, Inovação, Transparência, Prazer em servir</p>
                            </div>
                        </div>
                        <div className="section-about-link">
                            <Link to="contact">Contate-nos para conhecer melhor</Link>
                        </div>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default AboutUs;