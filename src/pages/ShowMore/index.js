import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image5 from '../../assets/images/photo3.jpg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ShowMore() {
    function local(path) {
        switch (path) {
            case 'mirror':
                return 'Espelhos';
            case 'corner-tables':
                return 'Mesas de Canto';
            case 'center-tables':
                return 'Mesas de Centro';
            case 'stools-and-puffs':
                return 'Banquetas e Puffs';
            case 'dining-tables':
                return 'Mesas de Jantar';
            case 'sideboards':
                return 'Aparadores';
            case 'others':
                return 'Outros';
            default:
                return null;
        }
    }

    const { params } = useParams();

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
        <div id="page-portfolio-show" className="container ">
            <PageHeader logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section-list">
                        <div className="section-back">
                            <Link to="/portfolio"><img src={backIcon} alt="Voltar" /></Link>
                            <span>{local(params)}</span>
                        </div>
                        <div className="section-list-grid">
                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC100</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC200</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC300</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC400</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC500</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC600</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC700</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" className="hover-gray" />
                                    </figure>
                                </div>
                                <div className="section-description-show">
                                    <h2 className="product-title-show">MODELO MC800</h2>
                                    <p className="product-text-show">
                                        Estrutura: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tampo: Pinos tratado 40mm
                                        <br />Dimensões: 1100 x 500 x 300
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default ShowMore;