import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image from '../../assets/images/table-phone.jpg';

import './styles.css';

function Inicio() {
    const [scroll, setScroll] = useState('hidden');

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY < 280) {
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
            <PageHeader colorTransparent={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section-transition-image">
                        <div className="section-transition-description">
                            <h1>Vamos recriar sua casa</h1>
                        </div>
                    </div>
                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">Projetos e produtos</h2>
                        </div>
                        <div className="section-product">
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image} alt="product" className="zoom" />
                            </figure>
                        </div>
                        <div className="section-ver-mais">
                            <Link to="portfolio">Ver mais</Link>
                        </div>
                    </div>

                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">Porque nos escolher</h2>
                        </div>
                        <div className="section-product">
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/19/195/195g9m.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Do projeto à execução</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/0j/0jc/0jc3z2.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Materiais de primeira</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/3w/3wu/3wunxe.svg?ph=f273c76eb3" alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/0a/0a8/0a871v.svg?ph=6e2389ce46" alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/32/328/328sfr.svg?ph=6e2389ce46" alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src="https://d1di2lzuh97fh2.cloudfront.net/files/07/07p/07p3l4.svg?ph=6e2389ce46" alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                            </div>
                        </div>

                    </div>

                    <div className="section-background-image">
                        <h1 className="section-background-image-title">Depoimentos</h1>
                        <div className="section-comment">
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src="https://d1di2lzuh97fh2.cloudfront.net/files/2i/2ie/2iek3c.svg?ph=f273c76eb3" alt="asdas" />
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