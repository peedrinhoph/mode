import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import Image1 from '../../assets/images/products/cadeira_concha1.jpg';
import Image2 from '../../assets/images/products/cadeira_concha2.jpg';
import Image3 from '../../assets/images/products/cadeira_concha3.jpg';

const lista = [{"id": 1,
    "nome": "Cadeira joli",
    "modelo": "Cadeiras",
    "referencia": "MDCA1002",
    "descricao": "Cadeira concha madeira estofada em tecido joli rose, base em tubo de aço pintada em aço corten",
    "tampo": "",
    "pintura": "Aço corten, cobre",
    "dimensao": "xxx x xxx x xxx",
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
    ]
}];

const ProductList1 = () => {
    return (
        <>
            {
                lista.map((item, index) => {
                    return (
                        <div key={index} className="section-product-show">
                            <Display imagens={item.imagens} alt={item.descricao} />
                            <div className="section-description-show">
                                <h2 className="product-title-show">{item.nome}</h2>
                                <p className="product-text-show">
                                    {item.descricao}
                                    <br />Pintura: {item.pintura}
                                    <br />Dimensões: {item.dimensao}
                                    <br />Referência: {item.referencia}
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