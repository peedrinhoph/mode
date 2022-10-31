import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

import Image1 from '../../assets/images/products/acabamentos/imbuia_natural.jpg';
import Image2 from '../../assets/images/products/acabamentos/nogueira.jpg';
import Image3 from '../../assets/images/products/acabamentos/mel.jpg';
import Image4 from '../../assets/images/products/acabamentos/imbuia_escura.jpg';

const lista = [{
    "id": 1,
    "nome": "Imbuia Natural",
    "tipo": "Tampo Laminado",
    "descricao": "Lamina de Imbuia Escura natural.",
    "imagens": [
        {
            "url": Image1
        }
    ],
}, {
    "id": 2,
    "nome": "Imbuia Escura ",
    "tipo": "Tampo Laminado",
    "descricao": "Lamina de Imbuia tingida na cor escura.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 3,
    "nome": "Nogueira Natural",
    "tipo": "Tampo Laminado",
    "descricao": "Lamina de Nogueira natural.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 4,
    "nome": "Nogueira Mel",
    "tipo": "Tampo Laminado",
    "descricao": "Lamina de Nogueira tingida na cor Mel.",
    "imagens": [
        {
            "url": Image3
        }
    ],
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
                                <Display imagens={item.imagens} alt={item.descricao} notSelect/>
                                <p className="product-text-show">
                                    Produto: {item.tipo} <br/>
                                    Descrição: {item.descricao}
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