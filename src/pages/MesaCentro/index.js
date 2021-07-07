import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

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


const lista = [{
    "id": 1,
    "nome": "Mesa Xenia",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1005 + MDCTR1006",
    "descricao": "Juntas ou separadas complementam o seu ambiente, mesa de centro com 50cm de diâmetro tampo em MDF e lamina de Imbuia Escura.",
    "tampo": "Imbuia Escura",
    "pintura": "Aço corten",
    "dimensao": [
        {
            "comprimento": "50cm",
            "profundidade": "50cm",
            "altura": "35cm"
        },
        {
            "comprimento": "50cm",
            "profundidade": "50cm",
            "altura": "30cm"
        },
    ],
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
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 2,
    "nome": "Mesa Aliança",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1004",
    "descricao": "Mesa de centro ferro chato, tampo em MDF oval com lamina de Imbuia Escura.",
    "tampo": "Imbuia Escura",
    "pintura": "Bronze liquida, Dourado, Preto Fosco e Niquel",
    "dimensao": [
        {
            "comprimento": "64cm",
            "profundidade": "54cm",
            "altura": "37cm"
        },
    ],
    "imagens": [
        {
            "url": Image4
        },
        {
            "url": Image5
        },
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 3,
    "nome": "Mesa X",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1000",
    "descricao": "Mesa de centro ferro chato, tampo tipo bandeja em MDF com lamina de Nogueira Mel ou Imbuia Escura.",
    "tampo": "Mel, Imbuia Escura",
    "pintura": "Aço Corten e Preto Fosco",
    "dimensao": [
        {
            "comprimento": "60cm",
            "profundidade": "40cm",
            "altura": "40cm"
        },
    ],
    "imagens": [
        {
            "url": Image6
        },
        {
            "url": Image7
        },
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 4,
    "nome": "Mesa Retângulo",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1001",
    "descricao": "Mesa de centro tubo 30x70, tampo em MDF com lamina de Nogueira Mel ou Imbuia Escura.",
    "tampo": "Mel, Imbuia Escura",
    "pintura": "Preto Fosco, Bronze e Aço Corten",
    "dimensao": [
        {
            "comprimento": "70cm",
            "profundidade": "45cm",
            "altura": "35cm"
        },
    ],
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
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 5,
    "nome": "Mesa Alçada",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1002",
    "descricao": "Mesa de centro tubular, tampo em MDF com lamina de Nogueira Mel ou Imbuia Escura.",
    "tampo": "Mel, Imbuia Escura",
    "pintura": "Preto Fosco, Cobre e Niquel",
    "dimensao": [
        {
            "comprimento": "53cm",
            "profundidade": "45cm",
            "altura": "30cm"
        },
    ],
    "imagens": [
        {
            "url": Image12
        },
        {
            "url": Image13
        },
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 6,
    "nome": "Mesa Pisa",
    "modelo": "Mesa de centro",
    "referencia": "MDCTR1003",
    "descricao": "Mesa de centro tubular, tampo tipo bandeja em MDF com lamina de Nogueira Mel ou Imbuia Escura.",
    "tampo": "Mel, Imbuia Escura",
    "pintura": "Aço Corten Liquida, Niquel e Preto",
    "dimensao": [
        {
            "comprimento": "70cm",
            "profundidade": "39.5cm",
            "altura": "43.5cm"
        }
    ],
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
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
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
                                    <br />Tampo: {item.tampo}
                                    <br /><br /><small>* <i>Produto feito sob encomenda.</i></small>
                                    <br /><small>* <i>{item.observacao}</i></small>
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