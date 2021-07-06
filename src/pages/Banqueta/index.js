import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/banqueta_bistro1.jpg';
import Image2 from '../../assets/images/products/banqueta_bistro2.jpg';
import Image3 from '../../assets/images/products/banqueta_concha2.jpg';
import Image4 from '../../assets/images/products/MDBQ1001.jpeg';


const lista = [{
    "id": 1,
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
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 2,
    "nome": "Banqueta Lika",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1001",
    "descricao": "Banqueta tubular alçada com estofado tecido capri branco, altura do assento 79cm.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": [
        {
            "comprimento": "42cm",
            "profundidade": "42cm",
            "altura": "90cm"
        },
    ],
    "imagens": [
        {
            "url": Image4
        },
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 4,
    "nome": "Banqueta Agatha",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1003",
    "descricao": "Banqueta concha MDF estofada em tecido joli rose, base tubular na cor aço corten, altura do assento 70cm, profundidade do assento 46cm.",
    "tampo": "",
    "pintura": "Aço corten, cobre",
    "dimensao": [
        {
            "comprimento": "58cm",
            "profundidade": "56cm",
            "altura": "90cm"
        },
    ],
    "imagens": [
        {
            "url": Image3
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
                                    <br />"<small><i>{item.observacao}</i></small>"
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