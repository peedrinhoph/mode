import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image2 from '../../assets/images/products/puff_pelucia_preto2.jpg';
import Image3 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image4 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image5 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image6 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image7 from '../../assets/images/products/puff_estofado_branco.jpg';


const lista = [{"id": 1,
    "nome": "Puff Juliana ",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF0001",
    "descricao": "Puff tubular com estofado pelúcia preto ou tecido capri branco.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": "500mm x 350mm x 310mm",
    "dimensao": [
        {
            "comprimento": "31cm",
            "profundidade": "56cm",
            "altura": "50cm"
        },
    ],
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        }
    ]
}, {
    "id": 2,
    "nome": "Puff Antonella",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF0002",
    "descricao": "Puff tubular com estofado de tecido capri branco embutido na estrutura",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "64cm",
            "profundidade": "56cm",
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
    ]
}, {
    "id": 3,
    "nome": "Puff Anexo",
    "modelo": "Puff e banqueta",
    "referencia": "xxxx",
    "descricao": "Puff tubular com estofado de tecido capri branco embutido na estrutura",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "64cm",
            "profundidade": "56cm",
            "altura": "37cm"
        },
    ],
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
    "nome": "Puff Helena",
    "modelo": "Puff e banqueta",
    "referencia": "xxxx",
    "descricao": "Puff tubular com estofado de tecido capri branco embutido na estrutura",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "64cm",
            "profundidade": "56cm",
            "altura": "37cm"
        },
    ],
    "imagens": [
        {
            "url": Image6
        },
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
                                    <br /> <br />Acabamento: {item.pintura}
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