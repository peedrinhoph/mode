import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image1 from '../../assets/images/photo1.jpg';
import Image2 from '../../assets/images/photo2.jpg';
import Image3 from '../../assets/images/photo3.jpg';
import Image4 from '../../assets/images/photo4.jpg';
import Image5 from '../../assets/images/photo5.jpg';
import Image6 from '../../assets/images/photo6.jpg';

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
            <PageHeader></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section">
                        <div className="section-portfolio">
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Espelhos redondos</h2>
                                    <p className="product-text-left product-text">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                        <br />Tamanhos: 350mm, 400mm, 500mm e 600mm
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/mirror`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image5} alt="product" className="zoom" />
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
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
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
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/center-tables`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image3} alt="product" className="zoom" />
                                    </figure>
                                </div>
                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image1} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Banquetas e Puffs</h2>
                                    <p className="product-text-right product-text">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/stools-and-puffs`}>Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de jantar</h2>
                                    <p className="product-text-left product-text">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/dining-tables`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image5} alt="product" className="zoom" />
                                    </figure>
                                </div>

                            </div>
                            <div className="section-portfolio-product reverse">
                                <div className="product-image">
                                    <figure>
                                        <img src={Image4} alt="product" className="zoom" />
                                    </figure>
                                </div>
                                <div className="section-product-description">
                                    <h2 className="product-title">Aparadores</h2>
                                    <p className="product-text-right product-text">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/sideboards`}>Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Outros</h2>
                                    <p className="product-text-left product-text">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                        <br /><br />Cores: Preto Brilho, Preto Fosco, Bronze e Branco
                                    </p>
                                    <div className="product-buttom">
                                        <Link to={`${url}/show-more/others`}>Ver mais</Link>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <figure>
                                        <img src={Image6} alt="product" className="zoom" />
                                    </figure>
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