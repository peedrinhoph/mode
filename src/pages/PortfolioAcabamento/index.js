import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image1 from '../../assets/images/products/acabamentos/bronze_especial.jpg';
import Image2 from '../../assets/images/products/acabamentos/LINHOBEGE.jpg';
import Image3 from '../../assets/images/products/acabamentos/nogueira.jpg';
import Image4 from '../../assets/images/products/acabamentos/vidro/acabamento_marmore_imperial.jpg';

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
                                    <h2 className="product-title">pintura eletrostática</h2>
                                    <p className="product-text-left product-text">
                                    A pintura eletrostática é uma das formas de pintura mais resistente e efetiva existente. 
                                    Essa pintura utiliza um processo diferenciado por meio de cargas elétricas para a fixação da tinta.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/electrostatic_painting`}>ver tudo</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image1} alt="A pintura eletrostática é uma das formas de pintura mais resistente e efetiva existente. 
                                    Essa pintura utiliza um processo diferenciado por meio de cargas elétricas para a fixação da tinta." className="zoom" />
                                    </figure>
                                </div>

                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image2} alt="Para decidir o melhor tecido do sofá, poltrona ou outro estofado, é necessário analisar o que é essencial para você. 
                                    Então verifique sempre as vantagens e desvantagens de cada tecido e se suprem suas necessidades. 
                                    Assim optamos por disponibilizar alguns dos tecidos que são mais utilizados em nossos produtos para que você escolha 
                                    aquele que atender a todos seus requisitos!" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">tecidos</h2>
                                    <p className="product-text-right product-text">
                                    Para decidir o melhor tecido do sofá, poltrona ou outro estofado, é necessário analisar o que é essencial para você. 
                                    Então verifique sempre as vantagens e desvantagens de cada tecido e se suprem suas necessidades. 
                                    Assim optamos por disponibilizar alguns dos tecidos que são mais utilizados em nossos produtos, para 
                                    que você escolha aquele que pode atender a todos seus requisitos!
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/cloth`}>ver tudo</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">mdf laminado</h2>
                                    <p className="product-text-left product-text">
                                    São chapas de MDF, com diferentes espessuras, onde são aplicadas lâminas de madeira natural, retiradas de troncos 
                                    a partir de um processo de laminação pode descascamento dando origem aos chamados laminados ou folheados.
                                    Nosso tampos tem o processo de laminação artesanal onde o próprio marceneiro escolhe as melhores laminas para trabalhar.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/cover`}>ver tudo</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image3} alt="São chapas de MDF, com diferentes espessuras, onde são aplicadas lâminas de madeira natural, retiradas de troncos 
                                    a partir de um processo de laminação pode descascamento dando origem aos chamados laminados ou folheados.
                                    Nosso tampos tem o processo de laminação artesanal onde o próprio marceneiro escolhe as melhores laminas para trabalhar.
                                    " className="zoom" />
                                    </figure>
                                </div>
                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image4} alt="O vidro marmorizado veio para ampliar suas opções na decoração de casas e ambientes internos ou externos, além do seu requinte e bom gosto, 
                                    o vidro marmorizado vem facilitar a limpeza e higiene no dia a dia em suas diversas aplicações.
                                    " className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">vidro marmorizado</h2>
                                    <p className="product-text-right product-text">
                                    O vidro marmorizado veio para ampliar suas opções na decoração de casas e ambientes internos ou externos, além do seu requinte e bom gosto, 
                                    o vidro marmorizado vem facilitar a limpeza e higiene no dia a dia em suas diversas aplicações.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/glass`}>ver tudo</Link>
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