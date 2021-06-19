import React from 'react';
import './styles.css';

import Display from '../ImageDisplay';
import Image1 from '../../assets/images/products/banqueta_bistro1.jpg';
import Image2 from '../../assets/images/products/banqueta_bistro2.jpg';
import Image3 from '../../assets/images/products/banqueta_concha2.jpg';
import Image4 from '../../assets/images/products/banqueta_concha1.jpg';


const lista = [{"id": 1,
    "nome": "Banqueta bistrô",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1000",
    "descricao": "Banqueta de ferro com acento em courvin texturizado",
    "tampo": "",
    "pintura": "Grafite",
    "dimensao": "750mm x 370mm",
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        }
    ]
}, {
    "id": 2,
    "nome": "Banqueta agatha",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1003",
    "descricao": "Banqueta concha madeira estofada em tecido joli rose, base em tubo de aço pintada em aço corten",
    "tampo": "",
    "pintura": "Aço corten, cobre",
    "dimensao": "xxx x xxx x xxx",
    "imagens": [
        {
            "url": Image3
        },
        {
            "url": Image4
        },
    ]
}, {
    "id": 3,
    "nome": "Banqueta lika",
    "modelo": "Puff e banqueta",
    "referencia": "MDBQ1001",
    "descricao": "Banqueta tubular 20x20 alçada com estofado tecido capri branco",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre",
    "dimensao": "500mm x 350mm x 310mm",
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