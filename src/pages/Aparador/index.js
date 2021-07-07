import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/aparador_vintage.jpg';
import Image2 from '../../assets/images/products/aparador_arco_mel.jpg';
import Image3 from '../../assets/images/products/aparador_arco_embuia.jpg';


const lista = [{"id": 1,
    "nome": "Aparador Vintage",
    "modelo": "Mesa e aparador",
    "referencia": "MDAPR1001",
    "descricao": "Aparador de ferro com tampo em madeira natural.",
    "tampo": "Natural",
    "pintura": "Preto",
    "dimensao": [
        {
            "comprimento": "110cm",
            "profundidade": "40cm",
            "altura": "80cm"
        },
    ],
    "imagens": [
        {
            "url": Image1
        }
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
}, {
    "id": 2,
    "nome": "Aparador Arco",
    "modelo": "Mesa e aparador",
    "referencia": "MDAPR1000",
    "descricao": "Aparador em ferro chato, tampo em MDF com lamina de Imbuia Escura ou Nogueira Mel.",
    "tampo": "Mel, Imbuia Escura",
    "pintura": "Preto Fosco e Niquel",
    "dimensao": [
        {
            "comprimento": "119cm",
            "profundidade": "31.5cm",
            "altura": "81cm"
        },
    ],
    "imagens": [
        {
            "url": Image2
        },
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