import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image2 from '../../assets/images/products/puff_pelucia_preto2.jpg';
//import Image3 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image4 from '../../assets/images/products/MDPUFF1003.jpeg';
import Image5 from '../../assets/images/products/MDPUFF1002.jpeg';
import Image6 from '../../assets/images/products/MDPUFF1004.jpeg';
import Image7 from '../../assets/images/products/puff_estofado_branco.jpg';


const lista = [{
    "id": 1,
    "visivel": 1,
    "nome": "Puff Juliana ",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF0001",
    "descricao": "Puff tubular dourado brilho, estofado pelúcia preto ou tecido capri branco, diâmetro do assento 35cm.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "0cm",
            "altura": "45cm"
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
    "visivel": 0,
    "nome": "Puff Helena",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1002",
    "descricao": "Puff tubular cobre, estofado com 15cm de tecido capri branco embutido na estrutura, diâmetro do assento 35cm.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "0cm",
            "altura": "45cm"
        },
    ],
    "imagens": [
        {
            "url": Image5
        },
    ]
}, {
    "id": 3,
    "visivel": 0,
    "nome": "Puff Antonella",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1003",
    "descricao": "Puff tubular rose, estofado de tecido capri branco, diâmetro do assento 35cm.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "0cm",
            "altura": "45cm"
        },
    ],
    "imagens": [
        {
            "url": Image4
        },
    ]
}, {
    "id": 4,
    "visivel": 0,
    "nome": "Puff Sophia",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1004",
    "descricao": "Puff tubular, estofado de tecido capri branco embutido na estrutura",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "0cm",
            "altura": "45cm"
        },
    ],
    "imagens": [
        {
            "url": Image6
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