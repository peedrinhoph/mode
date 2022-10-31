import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

import Image1 from '../../assets/images/products/acabamentos/vidro/acabamento_marmore_imperial.jpg';
import Image2 from '../../assets/images/products/acabamentos/vidro/carrara.jpg';
import Image3 from '../../assets/images/products/acabamentos/vidro/nero.jpg';
import Image4 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-BAMBU-CLARO.jpg';
import Image5 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-BAMBU-MEDIO.jpg';
import Image6 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-OLIVEIRA-CLARA.jpg';
import Image7 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-OLIVEIRA-ESCURA.jpg';
import Image8 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-CARVALHO-CLARO.jpg';
import Image9 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-ZEBRANO.jpg';
import Image10 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-MOGNO.jpg';
const lista = [{
    "id": 1,
    "nome": "Mármore Imperial",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image1
        }
    ],
}, {
    "id": 2,
    "nome": "Mármore Carrara",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 3,
    "nome": "Mármore Nero",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image3
        }
    ],
}, {
    "id": 4,
    "nome": "Bambu Claro",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 5,
    "nome": "Bambu Médio",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 6,
    "nome": "Oliveira Clara",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 7,
    "nome": "Oliveira Escura",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 8,
    "nome": "Carvalho Claro",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 9,
    "nome": "Zebrano",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 10,
    "nome": "Mogno",
    "tipo": "Impressão",
    "descricao": "Vidro marmorizado.",
    "imagens": [
        {
            "url": Image10
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