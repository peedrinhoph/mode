import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image1 from '../../assets/images/products/costelagiratoria.png';
import Image2 from '../../assets/images/products/aparadorvintage.jpg';
import Image3 from '../../assets/images/products/costelafixa.jpeg';
import Image4 from '../../assets/images/products/mesacentroaro.jpg';
import Image5 from '../../assets/images/products/mesacentroembuia.jpg';
import Image6 from '../../assets/images/products/mesabistro.jpg';
import Aspas from '../../assets/images/icons/aspas.svg';
import Project from '../../assets/images/icons/project.svg';
import Pencil from '../../assets/images/icons/pencil.svg';
import Selo from '../../assets/images/icons/selo.svg';

import './styles.css';

function Inicio() {
    const [scroll, setScroll] = useState('hidden');
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY < 60) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div id="page-start" className="container ">
            <PageHeader colorTransparent={scroll} logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section-transition-image">
                        <div className="section-transition-description">
                            {/*<h1>
                                    Toda a sofisticação e inovação idealizados <br />em diferentes projetos
                                </h1>*/}
                            <h1>
                                <span>Inovação.</span>
                                <span>Qualidade.</span>
                                <span>Sofisticação.</span>
                            </h1>
                            {/*<div className="section-contact-link">
                                    <Link to="contact">Contate-nos</Link>
                                </div>*/}
                        </div>
                    </div>

                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">Projetos e produtos</h2>
                        </div>
                        <div className="section-product">
                            <figure>
                                <img src={Image1} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image2} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image3} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image4} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image5} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image6} alt="product" className="zoom" />
                            </figure>
                        </div>
                        <div className="section-ver-mais">
                            <Link to="portfolio">Ver mais</Link>
                        </div>
                    </div>

                    <div className="section-why">
                        <h1 className="section-why-title">Móveis de aço</h1>
                        <div className="section-why-grid">
                            <div className="section-why-text">
                                <p>
                                    Durabilidade, design e modernidade: Dentre as vantagens dos móveis de aço carbono é possível encontrar uma
                                    grande variedade de peças que possam contribuir de forma funcional e agradável
                                    todos os ambientes residenciais e corporativos, como por exemplo: mesas de jantar,
                                    de escritório, de centro, aparadores, prateleiras e estantes, entre outras inúmeras peças.<br /><br />
                                    Nos últimos tempos tem ganhado muito espaço na decoração de ambientes onde partiram de espaços indústriais ou comerciais
                                    e foram para dentro das casas e empresas com uma proposta visual mais moderna e arrojada nos ambientes em que são utilizados.<br /><br />

                                    São móveis trabalhados em chapas e tubos de aço com diversas espessuras de modo a suportar diferentes
                                    cargas de peso e seu processo de pintura utiliza o sistema eletrostática epóxi a pó (técnica que garante alta resistência à umidade
                                    e produtos químicos, alta durabilidade e resistência à abrasão). Além disso, as peças são disponibilizadas em cores variadas para
                                    combinar com qualquer ambiente, o que faz desses móveis uma alternativa prática e com um ótimo custo/benefício.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">Porque nos escolher</h2>
                        </div>
                        <div className="section-product">
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Project} alt="asdas" />
                                    <h3>Do projeto à execução</h3>
                                </div>
                                <p>
                                    A fase principal consiste em entender as necessidades do nosso cliente, sendo esse o primeiro passo na elaboração de um produto.
                                    À partir daí, acrescentamos nossa competência técnica para executar tudo e deixar do jeitinho que imaginamos.
                                </p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Selo} alt="asdas" />
                                    <h3>Materiais de primeira</h3>
                                </div>
                                <p>
                                    A fabricação de móveis de aço carbono oferece maior resistência, durabilidade e valor estético aos produtos,
                                    mas pode proporcionar ainda outros benefícios, pois o aço carbono proporciona um visual moderno e arrojado para os ambientes em que é utilizado.
                                </p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Pencil} alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>
                                    Todas as peças prontas passam por uma avaliação na qualidade das dobras e soldas feitas para unir os materiais antes de passar para o revestimento eletrostático.
                                </p>
                            </div>
                        </div>
                        <div className="section-contact-link section-contact-black-link">
                            <Link to="about-us">Quem somos</Link>
                        </div>
                    </div>

                    <div className="section-background-image">
                        <h1 className="section-background-image-title">Depoimentos</h1>
                        <div className="section-comment">
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {scroll && <span id="mouse"></span>}
            <PageFooter />
        </div>
    )
}

export default Inicio;