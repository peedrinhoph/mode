import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image1 from '../../assets/images/products/costelagiratoria.png';
import Image2 from '../../assets/images/products/mesacanto1.jpg';
import Image3 from '../../assets/images/products/puff.jpg';
import Image4 from '../../assets/images/products/mesacentroaro.jpg';
import Image5 from '../../assets/images/products/aparadorvintage.jpg';
import Image6 from '../../assets/images/products/banqueta.jpg';
import Image7 from '../../assets/images/products/cadeira_concha1.jpg';
import Image8 from '../../assets/images/products/mesabistro.jpg';

import './styles.css';

function Portfolio() {
    let { url } = useRouteMatch();

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
        <div id="page-portfolio" className="container ">
            <PageHeader logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section">
                        <div className="section-portfolio">
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Poltrona Costela</h2>
                                    <p className="product-text-left product-text">
                                        A poltrona costela foi originalmente criada em 1956 pelo designer austríaco Martin Eisler.
                                        De lá pra cá, a poltrona se tornou um símbolo de elegância, estilo e modernidade. Tudo isso sem abrir mão do conforto.
                                        Sim, porque se você tem dúvidas se a poltrona costela é ou não confortável, nos aqui já podemos adiantar que sim,
                                        ela é extremamente confortável e você também vai chegar a essa conclusão.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/rib-armchair`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image1} alt="product" className="zoom" />
                                    </figure>
                                </div>

                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image2} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de canto</h2>
                                    <p className="product-text-right product-text">
                                        A mesa de canto, também conhecida como mesa lateral ou mesa de apoio,
                                        é aquele móvel super funcional para decoração de sala de estar, sala de
                                        jantar e até mesmo no quarto. E uma grande vantagem da mesa de canto é que
                                        ela é uma excelente opção para casas compactas, pois ao contrário da mesa de
                                        centro a mesa de canto não atrapalha a circulação pelo ambiente.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/corner-tables`}>Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de centro</h2>
                                    <p className="product-text-left product-text">
                                        A mesa de centro é um dos móveis mais estratégicos para a decoração de um ambiente.
                                        Aliás, o seu próprio nome já dá pistas da sua relevância no espaço: ficando no centro de tudo,
                                        é natural que chame a atenção e diga muito sobre o estilo de decoração e até mesmo a personalidade dos donos da casa.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/center-tables`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image4} alt="product" className="zoom" />
                                    </figure>
                                </div>
                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image3} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Puffs</h2>
                                    <p className="product-text-right product-text">
                                        Os puffs são móveis versáteis e funcionais que se adequam a qualquer
                                        espaço e ambiente de uma decoração para casa, por isso são muito utilizados
                                        na decoração e otimização de diversos cômodos.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/puffs`}>Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Banquetas</h2>
                                    <p className="product-text-left product-text">
                                        Usar banquetas na decoração é uma saída prática e cheia de possibilidades
                                        para levar mais conforto e funcionalidade aos ambientes residenciais.
                                        Elas são objetos versáteis e podem ajudar a compor qualquer espaço interno
                                        ou externo de uma casa, seja qual for o nível de formalidade e a tendência decorativa predominante.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/stools`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image6} alt="product" className="zoom" />
                                    </figure>
                                </div>

                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image5} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Aparadores</h2>
                                    <p className="product-text-right product-text">
                                        Seja clássico, moderno ou contemporâneo, o aparador ganha ainda mais beleza quando
                                        combinado com pequenos objetos e acessórios. Os modelos mais delicados e com ausência
                                        de gavetas ou portinhas pedem uma composição mais limpa. Para isso, use vasinhos com flores,
                                        velas, porta-retratos, quadrinhos ou esculturas.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/sideboards`}>Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Cadeiras estofadas</h2>
                                    <p className="product-text-left product-text">
                                        As cadeiras estofadas além de super confortáveis também são um daqueles
                                        móveis que chega para protagonizar a decoração principalmente quando
                                        falamos de cadeiras estofadas coloridas.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/chair`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image7} alt="product" className="zoom" />
                                    </figure>
                                </div>
                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image8} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesa bistrot</h2>
                                    <p className="product-text-right product-text">
                                    As mesas bistrot, como o próprio nome sugere, são frequentemente 
                                    usadas em estabelecimentos gastronômicos, aquelas utilizadas em modernos 
                                    bistrôs franceses, e de outros paises, que agora podem ser incorporadas na 
                                    decoração de casa de uma forma moderna e bem atual. Bistrot ou bistrô nada 
                                    mais é do que um pequeno bar ou restaurante, onde são servidos petiscos, 
                                    bebidas alcoólicas e cafés. O ambiente geralmente é charmoso e acolhedor, 
                                    a comida não é rebuscada e o clima é informal.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/tables`}>Ver mais</Link>
                                    </div>
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

export default Portfolio;