import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/cadeira_concha1.jpg';
import Image2 from '../../assets/images/products/cadeira_concha2.jpg';
import Image3 from '../../assets/images/products/cadeira_concha3.jpg';
import Image4 from '../../assets/images/products/poltrona_julieta1.jpg';
import Image5 from '../../assets/images/products/poltrona_julieta2.jpg';

const lista = [{"id": 1,
    "nome": "Cadeira Jolie",
    "modelo": "Cadeiras",
    "referencia": "MDCA1002",
    "descricao": "Cadeira concha MDF estofada em tecido Veludo Joli rose, base tubular na cor Aço Corten, altura do assento 48cm, profundidade do assento 48cm.",
    "tampo": "",
    "revestimento": "Tecidos Capri e Joli Aveludado",
    "pintura": "Aço Corten",
    "dimensao": [
        {
            "comprimento": "57cm",
            "profundidade": "57cm",
            "altura": "96cm"
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
        }
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {"id": 2,
"nome": "Cadeira Julieta",
"modelo": "Cadeiras",
"referencia": "MDCA1001",
"descricao": "Cadeira concha MDF estofada em tecido Veludo Joli rose, base tubular na cor Aço Corten, altura do assento 48cm, profundidade do assento 48cm. Peça versátil que pode ser composta nos mais diversificados ambientes.",
"tampo": "",
"revestimento": "Tecidos Capri e Joli Aveludado",
"pintura": "Aço Corten",
"dimensao": [
    {
        "comprimento": "57cm",
        "profundidade": "57cm",
        "altura": "68cm"
    },
],
"imagens": [
    {
        "url": Image4
    },
    {
        "url": Image5
    }
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
                                    <br />Revestimento: {item.revestimento}
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