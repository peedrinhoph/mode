import React from 'react';
import './styles.css';

import Display from '../ImageDisplay';
import Image1 from '../../assets/images/products/mesa_bistro.jpg';
import Image2 from '../../assets/images/products/mesa_bistro_conjunto.jpg';

const lista = [{"id": 1,
    "nome": "Mesa bistrot",
    "modelo": "Mesas",
    "referencia": "MDMBT1000",
    "descricao": "Mesa ferro tampo mdf com lamina de embuia escuro",
    "tampo": "",
    "pintura": "Grafite",
    "dimensao": "800mm x 1000mm",
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
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
                                    Descrição: {item.descricao}
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