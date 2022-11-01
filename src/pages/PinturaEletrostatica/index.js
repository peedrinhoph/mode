import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

import Image3 from '../../assets/images/products/acabamentos/pintura/cobre.jpg';
import Image4 from '../../assets/images/products/acabamentos/pintura/DOURADO.jpg';
import Image5 from '../../assets/images/products/acabamentos/pintura/aco_corten.jpg';
import Image6 from '../../assets/images/products/acabamentos/pintura/MARROM TX.jpg';
import Image7 from '../../assets/images/products/acabamentos/pintura/CINZA FOSCO.jpg';
import Image8 from '../../assets/images/products/acabamentos/pintura/CINZA METALICO.jpg';
import Image9 from '../../assets/images/products/acabamentos/pintura/NIQUEL.jpg';
import Image10 from '../../assets/images/products/acabamentos/pintura/ROSE GOLD.jpg';
import Image11 from '../../assets/images/products/acabamentos/pintura/BRONZE.jpg';
import Image12 from '../../assets/images/products/acabamentos/pintura/PRETO FOSCO.jpg';
import Image13 from '../../assets/images/products/acabamentos/pintura/PRETO BRILHO.jpg';
import Image14 from '../../assets/images/products/acabamentos/pintura/GRAFITE FOSCO.jpg';
import Image21 from '../../assets/images/products/acabamentos/pintura/dourado_especial.jpg';
import Image22 from '../../assets/images/products/acabamentos/pintura/bronze_especial.jpg';
import Image23 from '../../assets/images/products/acabamentos/pintura/acocortenespecial.jpg';

const lista = [{
    "id": 23,
    "nome": "Cobre",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Cobre.",
    "imagens": [
        {
            "url": Image3
        }
    ],
}, {
    "id": 24,
    "nome": "Dourado",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Dourado.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 25,
    "nome": "Dourado Especial",
    "tipo": "Pintura Liquida",
    "descricao": "Pintura especial perolizada na cor Dourado.",
    "imagens": [
        {
            "url": Image21
        }
    ],
}, {
    "id": 26,
    "nome": "Marrom TX",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Marrom TX.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 27,
    "nome": "Aço Corten",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Aço Corten.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 28,
    "nome": "Aço Corten Especial",
    "tipo": "Pintura Liquida",
    "descricao": "Pintura especial liquida na cor Aço Corten.",
    "imagens": [
        {
            "url": Image23
        }
    ],
}, {
    "id": 29,
    "nome": "Cinza Fosco",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Fosco.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 30,
    "nome": "Cinza Metálico",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Metálico.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 31,
    "nome": "Niquel",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Níquel.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 32,
    "nome": "Rose Gold",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Rose Gold.",
    "imagens": [
        {
            "url": Image10
        }
    ],
}, {
    "id": 33,
    "nome": "Bronze",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Bronze.",
    "imagens": [
        {
            "url": Image11
        }
    ],
}, {
    "id": 34,
    "nome": "Bronze Especial",
    "tipo": "Pintura Liquida",
    "descricao": "Pintura especial na cor Bronze.",
    "imagens": [
        {
            "url": Image22
        }
    ],
}, {
    "id": 35,
    "nome": "Preto Fosco",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Preto Fosco.",
    "imagens": [
        {
            "url": Image12
        }
    ],
}, {
    "id": 36,
    "nome": "Preto Semi Fosco",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Preto Semi Fosco.",
    "imagens": [
        {
            "url": Image13
        }
    ],
}, {
    "id": 37,
    "nome": "Grafite Fosco",
    "tipo": "Pintura Epóxi",
    "descricao": "Pintura epóxi na cor Grafite Fosco.",
    "imagens": [
        {
            "url": Image14
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