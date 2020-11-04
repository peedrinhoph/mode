import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import ProductMirror from '../../components/ProductMirror';

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
                            <ProductMirror />
                        </div>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default ShowMore;