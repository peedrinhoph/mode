import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
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
import Image16 from '../../assets/images/products/mesa_centro_pisa3.jpg';
import Image17 from '../../assets/images/products/mesa_centro_pisa4.jpg';


const lista = [{"id": 1,
    "nome": "Mesa Anexo",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1005 e MDCTR1006",
    "descricao": "Juntas ou separadas complementam o seu ambiente, mesa de centro com 600mm de diâmetro tampo em mdf e lamina de embuia natural",
    "tampo": "",
    "pintura": "Aço corten",
    "dimensao": "MDCTR1005 xxx x xxx x xxx e MDCTR1006 xxx x xxx x xxx",
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
    "nome": "Mesa Aliança",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1004",
    "descricao": "Mesa de centro feita com ferro chato, tampo em mdf com lamina de embuia escuro",
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
    "nome": "Mesa X",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1000",
    "descricao": "Mesa de centro ferro chato 1 1/2 com tampo tipo bandeja em mdf com lamina de nogueira cor mel ou embuia escuro",
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
    "id": 4,
    "nome": "Mesa Retângulo",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1001",
    "descricao": "Mesa de centro tubo 30x70 com tampo em mdf com lamina de nogueira cor mel ou embuia escuro",
    "tampo": "",
    "pintura": "Preto Fosco, Bronze e Aço Corten",
    "dimensao": "350mm x 700mm x 450mm",
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
    "id": 5,
    "nome": "Mesa Alçada",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1002",
    "descricao": "Mesa de centro tubo 20x20 tampo em mdf com lamina de nogueira cor mel ou embuia escuro",
    "tampo": "",
    "pintura": "Preto Fosco, Cobre e Niquel",
    "dimensao": "300mm x 450mm x 530mm",
    "imagens": [
        {
            "url": Image12
        },
        {
            "url": Image13
        },
    ]
}, {
    "id": 6,
    "nome": "Mesa Pisa",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1003",
    "descricao": "Mesa de centro tubo 15x15 tampo tipo bandeja em mdf com lamina de nogueira cor mel ou embuia escuro",
    "tampo": "",
    "pintura": "Aço Corten Liquida, Niquel e Preto",
    "dimensao": "435mm x 700mm x 395mm",
    "imagens": [
        {
            "url": Image14
        },
        {
            "url": Image16
        },
        {
            "url": Image15
        },
        {
            "url": Image17
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
                                    {item.descricao}
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