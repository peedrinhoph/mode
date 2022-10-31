import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import ProductMirror from '../ProductMirror';
import Tecido from '../Tecidos';
import Madeira from '../Madeira';
import Marmorizado from '../Marmorizado';
import Pintura from '../PinturaEletrostatica';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ShowMore() {
    function local(path) {
        switch (path) {
            case 'electrostatic_painting':
                return 'pintura eletrostática';
            case 'cloth':
                return 'tecidos';
            case 'cover':
                return 'tampos';
            case 'glass':
                return 'vidros impressos';
            case 'others':
                return 'outros';
            default:
                return null;
        }
    }

    function page(name) {
        switch (name) {
            case 'electrostatic_painting':
                return <Pintura />
            case 'cloth':
                return <Tecido />
            case 'cover':
                return <Madeira />
            case 'glass':
                return <Marmorizado />
            case 'other':
                return <ProductMirror />
            default:
                return <h1>Opss, Produto não encontrado!</h1>;
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
        <div id="page-portfolio-show-finish" className="container ">
            <PageHeader logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section-list-finish">
                        <div className="section-back-finish">
                            <Link to="/acabamento"><img src={backIcon} alt="Voltar" /></Link>
                            <span>{local(params)}</span>
                        </div>
                        <div className="section-list-grid-finish">
                            {page(params)}
                        </div>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default ShowMore;