import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import Image1 from '../../assets/images/products/costelagiratoria.png';
import Image2 from '../../assets/images/products/costelagiratoria1.png';
import Image3 from '../../assets/images/products/costelafixa.jpeg';
import Image4 from '../../assets/images/products/costelafixa1.png';

const lista = [{
    "id": 1,
    "nome": "Costela Giratória com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1000 e MDCLA1001",
    "descricao": "Juntas ou separados a poltrona costela giratória e o puff complementam qualquer ambiente, com almofadas em corino ou tecido, pés em madeira tingida",
    "tampo": "",
    "pintura": "Natural",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        },
    ]
}, {
    "id": 2,
    "nome": "Costela Fixa com Puff",
    "modelo": "Poltrona",
    "referencia": "MDCLA1002 e MDCLA1003",
    "descricao": "Juntas ou separados a poltrona costela fixa e o puff complementam qualquer ambiente,  almofadas em corino ou tecido com pés metálicos na cor preta",
    "tampo": "",
    "pintura": "Preto",
    "dimensao": "Poltrona 800mm x 900mm 680mm - Puff 444mm x 555mm x 680mm",
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