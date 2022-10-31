import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/mesa_canto_dupla1.jpg';
import Image2 from '../../assets/images/products/mesa_canto_dupla2.jpg';
import Image3 from '../../assets/images/products/mesa_canto_quadrada_mel1.jpg';
import Image4 from '../../assets/images/products/thumbnail_IMG_9576.jpg';
import Image5 from '../../assets/images/products/mesa_canto_quadrada_embuia2.jpg';
import Image6 from '../../assets/images/products/thumbnail_IMG_9582.jpg';
import Image7 from '../../assets/images/products/mesa_canto_vintage.jpg';
import Image8 from '../../assets/images/products/thumbnail_IMG_9583.jpg';
import Image9 from '../../assets/images/products/thumbnail_IMG_9586.jpg';

const lista = [
    {
        "id": 1,
        "nome": "Mesa Doble",
        "modelo": "Mesas de apoio",
        "referencia": "MDCTO1002",
        "descricao": "Mesa de canto maior com diâmetro de 51cm e mesa menor com 46cm, tampos MDF com folha de Nogueira na cor natural.",
        "tampo": "Nogueira Natural",
        "pintura": "Dourado",
        "dimensao": [
            {
                "comprimento": "51cm",
                "profundidade": "51cm",
                "altura": "60cm"
            },
            {
                "comprimento": "46cm",
                "profundidade": "46cm",
                "altura": "55cm",
            },
        ],
        "imagens": [
            {
                "url": Image1
            },
            {
                "url": Image2
            },
        ],
        "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
    }, {
        "id": 2,
        "nome": "Mesa Tower",
        "modelo": "Mesas de apoio",
        "referencia": "MDCTO1000",
        "descricao": "Mesa de canto tubo redondo, tampo tipo bandeja medindo 33cm em MDF com folha de Nogueira ou Imbuia Escura.",
        "tampo": "Mel, Imbuia Escura",
        "pintura": "Aço Corten Especial",
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
        ],
        "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
    }, {
        "id": 3,
        "nome": "Mesa Vintage",
        "modelo": "Mesas de apoio",
        "referencia": "MDCTO1001",
        "descricao": "Mesa de canto em ferro, com tampo tipo bandeja em MDF com folha de Nogueira tingida.",
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
        ],
        "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
    }, {
        "id": 4,
        "nome": "Mesa de Apoio Una",
        "modelo": "Mesas de apoio",
        "referencia": "MDCTO1004",
        "descricao": "Mesa lateral de apoio para ser acessada sob o braço do sofá.",
        "tampo": "Natural",
        "pintura": "Dourado",
        "dimensao": [
            {
                "comprimento": "0cm",
                "profundidade": "0cm",
                "altura": "0cm",
            },
        ],
        "imagens": [
            {
                "url": Image9
            }, {
                "url": Image8
            },
        ],
        "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
    }, {
        "id": 6,
        "nome": "Mesa de Canto Utile",
        "modelo": "Mesas de apoio",
        "referencia": "MDCTO1005",
        "descricao": "Mesa lateral para aquele cantinho que precisa de um charme sem ocupar muito espaço..",
        "tampo": "Preto",
        "pintura": "Dourado",
        "dimensao": [
            {
                "comprimento": "0cm",
                "profundidade": "0cm",
                "altura": "0cm",
            },
        ],
        "imagens": [
            {
                "url": Image6
            },
            {
                "url": Image4
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
                                    <br /><br />Estrutura: {item.pintura}
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