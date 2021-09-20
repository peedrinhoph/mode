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
import Image17 from '../../assets/images/products/acabamentos/mel.jpg';
import Image18 from '../../assets/images/products/acabamentos/imbuia_escura.jpg';
import Image19 from '../../assets/images/products/acabamentos/capri_branco.jpg';
import Image20 from '../../assets/images/products/acabamentos/tecidobanqueta.jpg';
import Image21 from '../../assets/images/products/acabamentos/dourado_especial.jpg';
import Image22 from '../../assets/images/products/acabamentos/bronze_especial.jpg';
import Image23 from '../../assets/images/products/acabamentos/acocortenespecial.jpg';
import Image24 from '../../assets/images/products/acabamentos/linhocapribege.jpg';
import Image25 from '../../assets/images/products/acabamentos/veludoverde.jpg';
import Image26 from '../../assets/images/products/acabamentos/acabamento_marmore_imperial.jpg';
import Image27 from '../../assets/images/products/acabamentos/denver_05_bege.jpg';
import Image28 from '../../assets/images/products/acabamentos/denver_preto_06.jpg';
import Image29 from '../../assets/images/products/acabamentos/joli_01.jpg';
import Image30 from '../../assets/images/products/acabamentos/joli_04a.jpg';
import Image31 from '../../assets/images/products/acabamentos/joli_azul06.jpg';
import Image32 from '../../assets/images/products/acabamentos/joli_cinza03.jpg';
import Image33 from '../../assets/images/products/acabamentos/joli_preto12.jpg';
import Image34 from '../../assets/images/products/acabamentos/joli_rosa18.jpg';
import Image35 from '../../assets/images/products/acabamentos/joli_verde15r.jpg';
import Image36 from '../../assets/images/products/acabamentos/joli_vermelho11r.jpg';

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
    "nome": "Imbuia Escura ",
    "tipo": "Lamina",
    "descricao": "Lamina de Imbuia tingida na cor escura.",
    "imagens": [
        {
            "url": Image18
        }
    ],
}, {
    "id": 3,
    "nome": "Nogueira Natural",
    "tipo": "Lamina",
    "descricao": "Lamina de Nogueira natural.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 4,
    "nome": "Nogueira Mel",
    "tipo": "Lamina",
    "descricao": "Lamina de Nogueira tingida na cor Mel.",
    "imagens": [
        {
            "url": Image17
        }
    ],
},{
    "id": 5,
    "nome": "Mármore Imperial",
    "tipo": "Vidro",
    "descricao": "Vidro padrão mármore.",
    "imagens": [
        {
            "url": Image26
        }
    ],
}, {
    "id": 6,
    "nome": "Joli 13",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 13 100% poliéster.",
    "imagens": [
        {
            "url": Image16
        }
    ],
}, {
    "id": 7,
    "nome": "Capri 01",
    "tipo": "Tecido",
    "descricao": "Artigo Capri 01 100% poliéster.",
    "imagens": [
        {
            "url": Image19
        }
    ],
}, {
    "id": 8,
    "nome": "Courvin Preto",
    "tipo": "Courvin",
    "descricao": "Courvin texturizado para assento de banqueta.",
    "imagens": [
        {
            "url": Image20
        }
    ],
}, {
    "id": 9,
    "nome": "Veludo Verde",
    "tipo": "Tecido",
    "descricao": "Tecido aveludado na cor verde.",
    "imagens": [
        {
            "url": Image25
        }
    ],
}, {
    "id": 10,
    "nome": "Linho Bege",
    "tipo": "Tecido",
    "descricao": "Tecido liso.",
    "imagens": [
        {
            "url": Image24
        }
    ],
}, {
    "id": 11,
    "nome": "Denver 02",
    "tipo": "Tecido",
    "descricao": "Artigo Denver 02 100% poliéster.",
    "imagens": [
        {
            "url": Image27
        }
    ],
}, {
    "id": 12,
    "nome": "Denver 06",
    "tipo": "Tecido",
    "descricao": "Artigo Denver 06 100% poliéster.",
    "imagens": [
        {
            "url": Image28
        }
    ],
}, {
    "id": 13,
    "nome": "Joli 01",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 01 100% poliéster.",
    "imagens": [
        {
            "url": Image29
        }
    ],
}, {
    "id": 14,
    "nome": "Joli 04 A",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 04 A 100% poliéster.",
    "imagens": [
        {
            "url": Image30
        }
    ],
}, {
    "id": 15,
    "nome": "Joli 06",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 06 100% poliéster.",
    "imagens": [
        {
            "url": Image31
        }
    ],
}, {
    "id": 16,
    "nome": "Joli 03",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 03 100% poliéster.",
    "imagens": [
        {
            "url": Image32
        }
    ],
}, {
    "id": 17,
    "nome": "Joli 12",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 12 100% poliéster.",
    "imagens": [
        {
            "url": Image33
        }
    ],
}, {
    "id": 18,
    "nome": "Joli 18",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 18 100% poliéster.",
    "imagens": [
        {
            "url": Image34
        }
    ],
}, {
    "id": 19,
    "nome": "Joli 15 R",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 15 R 100% poliéster.",
    "imagens": [
        {
            "url": Image35
        }
    ],
}, {
    "id": 20,
    "nome": "Joli 11 R",
    "tipo": "Tecido",
    "descricao": "Artigo Joli 11 R 100% poliéster.",
    "imagens": [
        {
            "url": Image36
        }
    ],
}, {
    "id": 21,
    "nome": "Cobre",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cobre.",
    "imagens": [
        {
            "url": Image3
        }
    ],
}, {
    "id": 22,
    "nome": "Dourado",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Dourado.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 23,
    "nome": "Dourado Especial",
    "tipo": "Liquida",
    "descricao": "Pintura especial perolizada na cor Dourado.",
    "imagens": [
        {
            "url": Image21
        }
    ],
}, {
    "id": 24,
    "nome": "Marrom TX",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Marrom TX.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 25,
    "nome": "Aço Corten",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Aço Corten.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 26,
    "nome": "Aço Corten Especial",
    "tipo": "Liquida",
    "descricao": "Pintura especial liquida na cor Aço Corten.",
    "imagens": [
        {
            "url": Image23
        }
    ],
}, {
    "id": 27,
    "nome": "Cinza Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Fosco.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 28,
    "nome": "Cinza Metálico",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Cinza Metálico.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 29,
    "nome": "Niquel",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Níquel.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 30,
    "nome": "Rose Gold",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Rose Gold.",
    "imagens": [
        {
            "url": Image10
        }
    ],
}, {
    "id": 31,
    "nome": "Bronze",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Bronze.",
    "imagens": [
        {
            "url": Image11
        }
    ],
}, {
    "id": 32,
    "nome": "Bronze Especial",
    "tipo": "Liquida",
    "descricao": "Pintura especial na cor Bronze.",
    "imagens": [
        {
            "url": Image22
        }
    ],
}, {
    "id": 33,
    "nome": "Preto Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Fosco.",
    "imagens": [
        {
            "url": Image12
        }
    ],
}, {
    "id": 34,
    "nome": "Preto Semi Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Preto Semi Fosco.",
    "imagens": [
        {
            "url": Image13
        }
    ],
}, {
    "id": 35,
    "nome": "Grafite Fosco",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Grafite Fosco.",
    "imagens": [
        {
            "url": Image14
        }
    ],
}, {
    "id": 36,
    "nome": "Vermelho",
    "tipo": "Epóxi",
    "descricao": "Pintura epóxi na cor Vermelha.",
    "imagens": [
        {
            "url": Image15
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
                                {/*<p className="product-text-show">
                                    {item.descricao}
                                </p>*/}
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ProductList1;