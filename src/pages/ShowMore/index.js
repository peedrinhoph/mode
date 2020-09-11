import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image5 from '../../assets/images/photo3.jpg';

import './styles.css';

function ShowMore() {
    return (
        <div id="page-portfolio-show" className="container ">
            <PageHeader />
            <main>
                <div id="page-start-content">
                    <div className="section-list">

                        <div className="section-list-grid">
                            <div className="section-product-show">
                                <div className="product-image-show">
                                    <figure>
                                        <img src={Image5} alt="product" />
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
                                        <img src={Image5} alt="product" />
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
                                        <img src={Image5} alt="product" />
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
                                        <img src={Image5} alt="product" />
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
                                        <img src={Image5} alt="product" />
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
                                        <img src={Image5} alt="product" />
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
                        </div>
                    </div>

                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default ShowMore;