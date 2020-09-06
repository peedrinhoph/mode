import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                                <figure>
                                    <img src={Image1} alt="product" className="zoom" />
                                </figure>
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de centro</h2>
                                    <p className="product-text-right">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to="contact">Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de centro</h2>
                                    <p className="product-text-left">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to="contact">Ver mais</Link>
                                    </div>
                                </div>
                                <figure>
                                    <img src={Image1} alt="product" className="zoom" />
                                </figure>

                            </div>
                            <div className="section-portfolio-product">
                                <figure>
                                    <img src={Image1} alt="product" className="zoom" />
                                </figure>
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de centro</h2>
                                    <p className="product-text-right">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to="contact">Ver mais</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="section-portfolio-product">
                                <div className="section-product-description">
                                    <h2 className="product-title">Mesas de centro</h2>
                                    <p className="product-text-left">
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut
                                        libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Donec rutrum congue leo eget malesuada.
                                    </p>
                                    <div className="product-buttom">
                                        <Link to="contact">Ver mais</Link>
                                    </div>
                                </div>
                                <figure>
                                    <img src={Image1} alt="product" className="zoom" />
                                </figure>
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