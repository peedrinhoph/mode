import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/mesa_canto_dupla1.jpg';
import Image2 from '../../assets/images/products/mesa_canto_dupla2.jpg';
import Image3 from '../../assets/images/products/mesa_canto_quadrada_mel1.jpg';
import Image4 from '../../assets/images/products/mesa_canto_quadrada_mel2.jpg';
import Image5 from '../../assets/images/products/mesa_canto_quadrada_embuia2.jpg';
import Image6 from '../../assets/images/products/mesa_canto_quadrada_embuia1.jpg';
import Image7 from '../../assets/images/products/mesa_canto_vintage.jpg';

const lista = [{
    "id": 1,
    "nome": "Mesa de canto dupla",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1002",
    "descricao": "Mesa de canto maior com diâmetro de 500mm e menor com 450mm. Tampos MDF com folha de nogueira na cor natural",
    "tampo": "Natural",
    "pintura": "Dourado",
    "dimensao": [
        {
            "comprimento": "40cm",
            "profundidade": "50cm",
            "altura": "70cm"
        },
        {
            "comprimento": "40cm",
            "profundidade": "45cm",
            "altura": "70cm",
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
    "nome": "Mesa de canto nogueira",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1000",
    "descricao": "Mesa de canto tubo redondo 5/8 com tampo tipo bandeja em mdf com folha de nogueira e embuia",
    "tampo": "Mel, Embuia Escuro",
    "pintura": "Aço Corten, Preto Fosco, Bronze e Dourado",
    "dimensao": [
        {
            "comprimento": "40cm",
            "profundidade": "40cm",
            "altura": "70cm",
        },
    ],
    "imagens": [
        {
            "url": Image3
        },
        {
            "url": Image5
        },
    ]
}, {
    "id": 3,
    "nome": "Mesa de canto vintage",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1001",
    "descricao": "Mesa de canto ferro 3/8 com tampo tipo bandeja em mdf com folha de nogueira envernizado",
    "tampo": "Natural",
    "pintura": "Preto brilho",
    "dimensao": [
        {
            "comprimento": "40cm",
            "profundidade": "40cm",
            "altura": "67cm",
        },
    ],
    "imagens": [
        {
            "url": Image7
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
                                <br />Acabamento: {item.pintura}
                                <br />Tampo: {item.tampo}
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