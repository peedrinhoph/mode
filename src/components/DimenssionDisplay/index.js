import React from 'react';
import './styles.css';

import Altura from '../../assets/images/icons/altura.png';
import Comprimento from '../../assets/images/icons/comprimento.png';
import Profundidade from '../../assets/images/icons/profundidade.png';

const Display = ({ dimenssion }) => {
    return (
        <div className="product-dimenssion">
            <div className="product-dimenssion-group">
                <figure>
                    <img src={Comprimento} alt="Comprimento" />
                </figure>
                <p>Compr. <br /> </p>
                {
                    dimenssion.map(({ comprimento }, index) => {
                        return (
                            <p key={index}>{comprimento}</p>
                        )
                    })
                }
            </div>
            <div className="product-dimenssion-group">
                <figure>
                    <img src={Profundidade} alt="Profundidade" />
                </figure>
                <p>Profun. <br /> </p>
                {
                    dimenssion.map(({ profundidade }, index) => {
                        return (
                            <p key={index}>{profundidade}</p>
                        )
                    })
                }
            </div>
            <div className="product-dimenssion-group">
                <figure>
                    <img src={Altura} alt="Altura" />
                </figure>
                <p>Altura. <br /> </p>
                {
                    dimenssion.map(({ altura }, index) => {
                        return (
                            <p key={index}>{altura}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Display;