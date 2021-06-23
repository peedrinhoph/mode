import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import Image1 from '../../assets/images/products/mesa_canto_dupla1.jpg';
import Image2 from '../../assets/images/products/mesa_canto_dupla2.jpg';
import Image3 from '../../assets/images/products/mesa_canto_quadrada_mel1.jpg';
import Image4 from '../../assets/images/products/mesa_canto_quadrada_mel2.jpg';
import Image5 from '../../assets/images/products/mesa_canto_quadrada_embuia2.jpg';
import Image6 from '../../assets/images/products/mesa_canto_quadrada_embuia1.jpg';
import Image7 from '../../assets/images/products/mesa_canto_vintage.jpg';

const lista = [{
    "id": 1,
    "nome": "Mesa de canto dupla",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1002",
    "descricao": "Mesa de canto maior com diâmetro de 500mm e menor com 450mm. Tampos MDF com folha de nogueira na cor natural",
    "tampo": "",
    "pintura": "Dourado",
    "dimensao": "Maior 800mm x 900mm 680mm - Menor 444mm x 555mm x 680mm",
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
    "nome": "Mesa de canto nogueira",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1000",
    "descricao": "Mesa de canto tubo redondo 5/8 com tampo tipo bandeja em mdf com folha de nogueira e embuia",
    "tampo": "Mel, Embuia Escuro",
    "pintura": "Aço Corten, Preto Fosco, Bronze e Dourado",
    "dimensao": "700mm x 400mm x 330mm",
    "imagens": [
        {
            "url": Image3
        },
        {
            "url": Image5
        },
    ]
},  {
    "id": 3,
    "nome": "Mesa de canto vintage",
    "modelo": "Mesas de apoio",
    "referencia": "MDCTO1001",
    "descricao": "Mesa de canto ferro 3/8 com tampo tipo bandeja em mdf com folha de nogueira envernizado",
    "tampo": "",
    "pintura": "Preto brilho",
    "dimensao": "400mm x 400mm x 670mm",
    "imagens": [
        {
            "url": Image7
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