import React from 'react';
import './styles.css';

import Display from '../ImageDisplay';
import Image1 from '../../assets/images/products/mesa_centro_dupla1.jpg';
import Image2 from '../../assets/images/products/mesa_centro_dupla2.jpg';
import Image3 from '../../assets/images/products/mesa_centro_dupla3.jpg';
import Image4 from '../../assets/images/products/mesa_centro_alianca1.jpg';
import Image5 from '../../assets/images/products/mesa_centro_alianca2.jpg';
import Image6 from '../../assets/images/products/mesa_centro_x_embuia.jpg';
import Image7 from '../../assets/images/products/mesa_centro_x_mel.jpg';
import Image8 from '../../assets/images/products/mesa_centro_retangular_embuia1.jpg';
import Image9 from '../../assets/images/products/mesa_centro_retangular_embuia2.jpg';
import Image10 from '../../assets/images/products/mesa_centro_retangular_mel1.jpg';
import Image11 from '../../assets/images/products/mesa_centro_retangular_mel2.jpg';
import Image12 from '../../assets/images/products/mesa_centro_alcada_embuia.jpg';
import Image13 from '../../assets/images/products/mesa_centro_alcada_mel.jpg';
import Image14 from '../../assets/images/products/mesa_centro_pisa1.jpg';
import Image15 from '../../assets/images/products/mesa_centro_pisa2.jpg';

const lista = [{"id": 1,
    "nome": "Poltrona Costela Giratória com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1000 e MDCLA1001",
    "descricao": "Costela Giratória com almofadas em corino ou tecido, pés em madeira tingida.",
    "tampo": "",
    "pintura": "Natural",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        },
        {
            "url": Image3
        },
    ]
}, {
    "id": 2,
    "nome": "Mesa centro aliança",
    "modelo": "Mesa de centro",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Mesa de centro feita com ferro chato, tampo em mdf com lamina de embuia escuro.",
    "tampo": "",
    "pintura": "Bronze liquida, Dourado, Preto Fosco e Niquel",
    "dimensao": "370mm x 640mm",
    "imagens": [
        {
            "url": Image4
        },
        {
            "url": Image5
        },
    ]
}, {
    "id": 3,
    "nome": "Mesa de centro X",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1000",
    "descricao": "Mesa de centro ferro chato 1 1/2 com tampo tipo bandeja em mdf com lamina de nogueira cor mel ou embuia escuro.",
    "tampo": "",
    "pintura": "Aço Corten e Preto Fosco",
    "dimensao": "300mm x 300cm x 300mm",
    "imagens": [
        {
            "url": Image6
        },
        {
            "url": Image7
        },
    ]
}, {
    "id": 3,
    "nome": "Poltrona Costela Fixa com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Costela fixa com almofadas em corino ou tecido com pés metálicos na cor preta.",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
    "imagens": [
        {
            "url": Image8
        },
        {
            "url": Image9
        },
        {
            "url": Image10
        },
        {
            "url": Image11
        },
    ]
}, {
    "id": 3,
    "nome": "Poltrona Costela Fixa com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Costela fixa com almofadas em corino ou tecido com pés metálicos na cor preta.",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
    "imagens": [
        {
            "url": Image12
        },
        {
            "url": Image13
        },
    ]
}, {
    "id": 4,
    "nome": "Poltrona Costela Fixa com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Costela fixa com almofadas em corino ou tecido com pés metálicos na cor preta.",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
    "imagens": [
        {
            "url": Image14
        },
        {
            "url": Image15
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
                            <Display imagens={item.imagens} alt={item.descricao} />
                            <div className="section-description-show">
                                <h2 className="product-title-show">{item.nome}</h2>
                                <p className="product-text-show">
                                    Descrição: {item.descricao}
                                    <br />Pintura: {item.pintura}
                                    <br />Dimensões: {item.dimensao}
                                    <br />Referência: {item.referencia}
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