import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/aparador_vintage.jpg';


const lista = [{"id": 1,
    "nome": "Aparador Due",
    "modelo": "Mesa e aparador",
    "referencia": "MDAPR1002",
    "descricao": "Conjunto aparador em duas peças composto com estofado.",
    "tampo": "Natural",
    "pintura": "Dourado",
    "dimensao": [
        {
            "comprimento": "81cm",
            "profundidade": "36cm",
            "altura": "80cm"
        },{
            "comprimento": "97cm",
            "profundidade": "30.5cm",
            "altura": "40cm"
        }
    ],
    "imagens": [
        {
            "url": Image1
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