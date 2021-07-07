import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

import Image1 from '../../assets/images/products/acabamentos/imbuia_escura.jpg';
import Image2 from '../../assets/images/products/acabamentos/nogueira.jpg';
import Image3 from '../../assets/images/products/acabamentos/photo1.jpg';
import Image4 from '../../assets/images/products/acabamentos/photo2.jpg';
import Image5 from '../../assets/images/products/acabamentos/photo3.jpg';
import Image6 from '../../assets/images/products/acabamentos/photo4.jpg';
import Image7 from '../../assets/images/products/acabamentos/photo5.jpg';
import Image8 from '../../assets/images/products/acabamentos/photo6.jpg';
import Image9 from '../../assets/images/products/acabamentos/photo7.jpg';
import Image10 from '../../assets/images/products/acabamentos/photo8.jpg';
import Image11 from '../../assets/images/products/acabamentos/photo9.jpg';
import Image12 from '../../assets/images/products/acabamentos/photo10.jpg';
import Image13 from '../../assets/images/products/acabamentos/photo11.jpg';
import Image14 from '../../assets/images/products/acabamentos/photo12.jpg';
import Image15 from '../../assets/images/products/acabamentos/photo13.jpg';

const lista = [{
    "id": 1,
    "nome": "Imbuia Escura",
    "tipo": "Lamina",
    "descricao": "Lamina de Imbuia Escura natural.",
    "imagens": [
        {
            "url": Image1
        }
    ],
}, {
    "id": 2,
    "nome": "Nogueira",
    "tipo": "Lamina",
    "descricao": "Lamina de Nogueira natural.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 3,
    "nome": "Cobre",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cobre.",
    "imagens": [
        {
            "url": Image3
        }
    ],
}, {
    "id": 4,
    "nome": "Dourado",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Dourado.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 5,
    "nome": "Aço Corten",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Aço Corten.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 6,
    "nome": "Marrom TX",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Marrom TX.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 7,
    "nome": "Cinza Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Fosco.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 8,
    "nome": "Cinza Metálico",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Metálico.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 9,
    "nome": "Niquel",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Níquel.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 10,
    "nome": "Rose Gold",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Rose Gold.",
    "imagens": [
        {
            "url": Image10
        }
    ],
}, {
    "id": 11,
    "nome": "Bronze",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Bronze.",
    "imagens": [
        {
            "url": Image11
        }
    ],
}, {
    "id": 12,
    "nome": "Preto Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Fosco.",
    "imagens": [
        {
            "url": Image12
        }
    ],
}, {
    "id": 13,
    "nome": "Preto Semi Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Semi Fosco.",
    "imagens": [
        {
            "url": Image13
        }
    ],
}, {
    "id": 14,
    "nome": "Grafite Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Grafite Fosco.",
    "imagens": [
        {
            "url": Image14
        }
    ],
}, {
    "id": 15,
    "nome": "Vermelho",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Vermelha.",
    "imagens": [
        {
            "url": Image15
        }
    ],
}, {
    "id": 16,
    "nome": "Dourado",
    "tipo": "Liquida",
    "descricao": "Pintura especial perolizada na cor Dourado.",
    "imagens": [
        {
            "url": Image4
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
                                <h2 className="product-title-show">REF. {item.nome}</h2>
                                <Display imagens={item.imagens} alt={item.descricao} />
                                <p className="product-text-show">
                                    {item.descricao}
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