import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

import Image1 from '../../assets/images/products/acabamentos/imbuia_natural.jpg';
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
import Image16 from '../../assets/images/products/acabamentos/joli_rose.jpg';
import Image17 from '../../assets/images/products/acabamentos/nogueira_mel.jpg';
import Image18 from '../../assets/images/products/acabamentos/imbuia_escura.jpg';
import Image19 from '../../assets/images/products/acabamentos/capri_branco.jpg';
import Image20 from '../../assets/images/products/acabamentos/ban.jpg';

const lista = [{
    "id": 1,
    "nome": "Imbuia Natural",
    "tipo": "Lamina",
    "descricao": "Lamina de Imbuia Escura natural.",
    "imagens": [
        {
            "url": Image1
        }
    ],
}, {
    "id": 2,
    "nome": "Nogueira Natural",
    "tipo": "Lamina",
    "descricao": "Lamina de Nogueira natural.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 18,
    "nome": "Nogueira Pintura Mel",
    "tipo": "Lamina",
    "descricao": "Lamina de Nogueira tingida na cor Mel.",
    "imagens": [
        {
            "url": Image17
        }
    ],
}, {
    "id": 19,
    "nome": "Imbuia Pintura Escura ",
    "tipo": "Lamina",
    "descricao": "Lamina de Imbuia tingida na cor escura.",
    "imagens": [
        {
            "url": Image18
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
    "nome": "Dourado Especial",
    "tipo": "Liquida",
    "descricao": "Pintura especial perolizada na cor Dourado.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 8,
    "nome": "Marrom TX",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Marrom TX.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 6,
    "nome": "Aço Corten",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Aço Corten.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 7,
    "nome": "Aço Corten Especial",
    "tipo": "Liquida",
    "descricao": "Pintura especial liquida na cor Aço Corten.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 9,
    "nome": "Cinza Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Fosco.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 10,
    "nome": "Cinza Metálico",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Metálico.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 11,
    "nome": "Niquel",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Níquel.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 12,
    "nome": "Rose Gold",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Rose Gold.",
    "imagens": [
        {
            "url": Image10
        }
    ],
}, {
    "id": 13,
    "nome": "Bronze",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Bronze.",
    "imagens": [
        {
            "url": Image11
        }
    ],
}, {
    "id": 14,
    "nome": "Preto Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Fosco.",
    "imagens": [
        {
            "url": Image12
        }
    ],
}, {
    "id": 15,
    "nome": "Preto Semi Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Semi Fosco.",
    "imagens": [
        {
            "url": Image13
        }
    ],
}, {
    "id": 16,
    "nome": "Grafite Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Grafite Fosco.",
    "imagens": [
        {
            "url": Image14
        }
    ],
}, {
    "id": 17,
    "nome": "Vermelho",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Vermelha.",
    "imagens": [
        {
            "url": Image15
        }
    ],
}, {
    "id": 18,
    "nome": "Joli Rose",
    "tipo": "Tecido",
    "descricao": "Tecido rose",
    "imagens": [
        {
            "url": Image16
        }
    ],
}, {
    "id": 19,
    "nome": "Capri Branco",
    "tipo": "Tecido",
    "descricao": "Tecido capri.",
    "imagens": [
        {
            "url": Image19
        }
    ],
}, {
    "id": 20,
    "nome": "Bistrot",
    "tipo": "Tecido",
    "descricao": "Tecido.",
    "imagens": [
        {
            "url": Image20
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