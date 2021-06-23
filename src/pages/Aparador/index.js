import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import Image1 from '../../assets/images/products/aparador_vintage.jpg';
import Image2 from '../../assets/images/products/aparador_arco_mel.jpg';
import Image3 from '../../assets/images/products/aparador_arco_embuia.jpg';


const lista = [{"id": 1,
    "nome": "Aparador vintage",
    "modelo": "Mesa e aparador",
    "referencia": "MDAPR1001",
    "descricao": "Aparador ferro redondo 3/8 e ferro chato 3/4x1/8 tampo em madeira envernizado",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": "800mm x 1100mm x 400mm",
    "imagens": [
        {
            "url": Image1
        }
    ]
}, {
    "id": 2,
    "nome": "Aparador arco",
    "modelo": "Mesa e aparador",
    "referencia": "MDAPR1000",
    "descricao": "Aparador em ferro chato 3/4 x 1/8 tampo em mdf com lamina de embuia escuro ou nogueira mel",
    "tampo": "",
    "pintura": "Preto Fosco e Niquel",
    "dimensao": "810mm x 1190mm x 315mm",
    "imagens": [
        {
            "url": Image2
        },
        {
            "url": Image3
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