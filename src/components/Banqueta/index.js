import React from 'react';
import './styles.css';

import Image5 from '../../assets/images/products/banqueta.jpg';

const ProductList1 = () => {
    return (
        <>
            <div className="section-product-show">
                <div className="product-image-show">
                    <figure>
                        <img src={Image5} alt="product" className="zoom" />
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
                        <img src={Image5} alt="product" className="zoom" />
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
                        <img src={Image5} alt="product" className="zoom" />
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
        </>
    );
}

export default ProductList1;