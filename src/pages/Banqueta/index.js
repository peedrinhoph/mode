import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/banqueta_bistro1.jpg';
import Image2 from '../../assets/images/products/banqueta_bistro2.jpg';
import Image3 from '../../assets/images/products/banqueta_concha2.jpg';
import Image4 from '../../assets/images/products/banqueta_concha1.jpg';


const lista = [{"id": 1,
    "nome": "Banqueta Bistrô",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1000",
    "descricao": "Banqueta de ferro com acento em courvin texturizado assento com 37cm de diâmetro.",
    "tampo": "",
    "pintura": "Grafite",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "0cm",
            "altura": "75cm"
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
    "nome": "Banqueta Agatha",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1003",
    "descricao": "Banqueta concha madeira estofada em tecido joli rose, base em tubo de aço pintada em aço corten.",
    "tampo": "",
    "pintura": "Aço corten, cobre",
    "dimensao": [
        {
            "comprimento": "64cm",
            "profundidade": "56cm",
            "altura": "37cm"
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
}, {
    "id": 3,
    "nome": "Banqueta Lika",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1001",
    "descricao": "Banqueta tubular 20x20 alçada com estofado tecido capri branco.",
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