import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/costelagiratoria.png';
import Image2 from '../../assets/images/products/costelagiratoria1.png';
import Image3 from '../../assets/images/products/costelafixa.jpeg';
import Image4 from '../../assets/images/products/costelafixa1.png';

const lista = [{
    "id": 1,
    "nome": "Costela Giratória com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1000 e MDCLA1001",
    "descricao": "Juntas ou separados a poltrona costela giratória e o puff complementam qualquer ambiente, com almofadas em corino ou tecido, pés em madeira tingida.",
    "tampo": "",
    "pintura": "Natural",
    "dimensao": [
        {
            "comprimento": "68cm",
            "profundidade": "94cm",
            "altura": "85cm"
        },
        {
            "comprimento": "68cm",
            "profundidade": "56cm",
            "altura": "44cm"
        },
    ],
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        },
    ]
}, {
    "id": 2,
    "nome": "Costela Fixa com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Juntas ou separados a poltrona costela fixa e o puff complementam qualquer ambiente, almofadas em corino ou tecido com pés metálicos na cor preta.",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": [
        {
            "comprimento": "68cm",
            "profundidade": "94cm",
            "altura": "85cm"
        },
        {
            "comprimento": "68cm",
            "profundidade": "56cm",
            "altura": "44cm"
        },
    ],
    "imagens": [
        {
            "url": Image3
        },
        {
            "url": Image4
        },
    ]
}];

const ProductList1 = () => {
    return (
        <>
            {
                lista.map((item, index) => {
                    return (
                        <div key={index} className="section-product-show">
                            <div className="section-description-show">
                                <h2 className="product-title-show">{item.nome}</h2>
                                <Display imagens={item.imagens} alt={item.descricao} />
                                <h2 className="product-title-show">REF. {item.referencia}</h2>
                                <DisplayDimenssion dimenssion={item.dimensao} />
                                <p className="product-text-show">
                                    {item.descricao}
                                    <br /><br />Acabamento: {item.pintura}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ProductList1;