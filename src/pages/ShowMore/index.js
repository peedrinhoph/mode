import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import ProductMirror from '../ProductMirror';
import PoltronaCostela from '../PoltronaCostela';
import MesaCanto from '../MesaCanto';
import MesaCentro from '../MesaCentro';
import Puff from '../Puff';
import Chair from '../Chair';
import Banqueta from '../Banqueta';
import Aparador from '../Aparador';
import Table from '../Table';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ShowMore() {
    function local(path) {
        switch (path) {
            case 'rib-armchair':
                return 'Poltrona Costela';
            case 'corner-tables':
                return 'Mesas de Canto';
            case 'center-tables':
                return 'Mesas de Centro';
            case 'puffs':
                return 'Puffs';
            case 'stools':
                return 'Banquetas';
            case 'sideboards':
                return 'Aparadores';
            case 'chair':
                return 'Cadeiras';
            case 'tables':
                return 'Mesas bistro';
            case 'others':
                return 'Outros';
            default:
                return null;
        }
    }

    function page(name) {
        switch (name) {
            case 'rib-armchair':
                return <PoltronaCostela />;
            case 'corner-tables':
                return <MesaCanto />;
            case 'center-tables':
                return <MesaCentro />
            case 'puffs':
                return <Puff />
            case 'stools':
                return <Banqueta />
            case 'sideboards':
                return <Aparador />
            case 'chair':
                return <Chair />
            case 'tables':
                return <Table />
            case 'other':
                return <ProductMirror />
            default:
                return <h1>Opss, Produto não encontrado!</h1>;
        }
    }

    const { params } = useParams();
    const { goBack } = useHistory();
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
                            <a onClick={goBack}><img src={backIcon} alt="Voltar" /></a>
                            <span>{local(params)}</span>
                        </div>
                        <div className="section-list-grid">
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