import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image2 from '../../assets/images/products/puff_pelucia_preto2.jpg';
//import Image3 from '../../assets/images/products/puff_estofado_branco1.jpg';
import Image4 from '../../assets/images/products/MDPUFF1003.jpg';
import Image5 from '../../assets/images/products/MDPUFF1002.png';
import Image6 from '../../assets/images/products/MDPUFF1004.jpg';
import Image7 from '../../assets/images/products/MDPUFF1003P.jpg';
import Image8 from '../../assets/images/products/MDPUFF1004P.jpg';

const lista = [{
    "id": 1,
    "nome": "Puff Juliana ",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF0001",
    "descricao": "Puff tubular dourado brilho, estofado tecido Pelúcia Preto e Linho Capri Branco, diâmetro do assento 35cm.",
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
    ], "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 2,
    "nome": "Puff Helena",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1002",
    "descricao": "Puff tubular cobre, estofado com 15cm de tecido Linho Capri Branco embutido na estrutura, diâmetro do assento 35cm.",
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
    ], "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 3,
    "nome": "Puff Antonella",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1003",
    "descricao": "Puff tubular rose, estofado de tecido Linho Capri Bege, diâmetro do assento 35cm.",
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
        },{
            "url": Image7
        },
    ], "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 4,
    "nome": "Puff Sophia",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF1004",
    "descricao": "Puff tubular, estofado de tecido Veludo Verde e Linho Capri Bege, diâmetro do assento 35cm.",
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
        }, {
            "url": Image8
        }
    ], "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
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