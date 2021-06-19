import React from 'react';
import './styles.css';

import Display from '../ImageDisplay';
import Image1 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image2 from '../../assets/images/products/puff_pelucia_preto2.jpg';
import Image3 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image4 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image5 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image6 from '../../assets/images/products/puff_estofado_branco.jpg';
import Image7 from '../../assets/images/products/puff_estofado_branco.jpg';


const lista = [{"id": 1,
    "nome": "Puff Antonella ",
    "modelo": "Puff e banqueta",
    "referencia": "MDPUFF0001",
    "descricao": "Puff tubular com estofado pelúcia preto ou tecido capri branco.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre.",
    "dimensao": "500mm x 350mm x 310mm",
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
    "nome": "Puff Rolha",
    "modelo": "Puff e banqueta",
    "referencia": "xxxx",
    "descricao": "Puff tubular com estofado de tecido capri branco embutido na estrutura.",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre.",
    "dimensao": "500mm x 350mm x 310mm",
    "imagens": [
        {
            "url": Image4
        },
        {
            "url": Image5
        },
    ]
}, {
    "id": 3,
    "nome": "Puff Anexo",
    "modelo": "Puff e banqueta",
    "referencia": "xxxx",
    "descricao": "Puff tubular com estofado de tecido capri branco embutido na estrutura..",
    "tampo": "",
    "pintura": "Dourado Brilho, Dourado Fosco, Rose Gold, Bronze, Cobre.",
    "dimensao": "300mm x 300cm x 300mm",
    "imagens": [
        {
            "url": Image6
        },
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