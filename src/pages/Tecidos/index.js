import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';

/**SINTETICO */
import Image1 from '../../assets/images/products/acabamentos/sintetico/CORANO MARROM MESCLA.jpg';
import Image2 from '../../assets/images/products/acabamentos/sintetico/CORANO PRETO.jpg';
import Image3 from '../../assets/images/products/acabamentos/sintetico/CORINO BRANCO.jpg';
import Image4 from '../../assets/images/products/acabamentos/sintetico/CORINO CASTANHO.jpg';
import Image5 from '../../assets/images/products/acabamentos/sintetico/CORINO NV MARROM.jpg';
import Image6 from '../../assets/images/products/acabamentos/sintetico/CORINO NV PRETO.jpg';
import Image7 from '../../assets/images/products/acabamentos/sintetico/CORINO TABACO MESCLA.jpg';
import Image8 from '../../assets/images/products/acabamentos/sintetico/MATELASSE BRANCO.jpg';
import Image9 from '../../assets/images/products/acabamentos/sintetico/MATELASSE MARROM.jpg';
import Image10 from '../../assets/images/products/acabamentos/sintetico/MATELASSE PRETO.jpg';
/**LINHO */
import Image11 from '../../assets/images/products/acabamentos/tecido/linho/BORGO02.jpg';
import Image12 from '../../assets/images/products/acabamentos/tecido/linho/CAPRI01.jpg';
import Image13 from '../../assets/images/products/acabamentos/tecido/linho/LINHO LINEN.jpg';
import Image14 from '../../assets/images/products/acabamentos/tecido/linho/SAVONE01.jpg';
/**AVELUDADO */
import Image15 from '../../assets/images/products/acabamentos/tecido/aveludado/DENVER02.jpg';
import Image16 from '../../assets/images/products/acabamentos/tecido/aveludado/DENVER06.jpg';
import Image17 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI01.jpg';
import Image18 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI03.jpg';
import Image19 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI04A.jpg';
import Image20 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI06.jpg';
import Image21 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI11R.jpg';
import Image22 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI12.jpg';
import Image23 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI13.jpg';
import Image24 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI15R.jpg';
import Image25 from '../../assets/images/products/acabamentos/tecido/aveludado/JOLI18.jpg';

const lista = [{
    "id": 1,
    "nome": "Corano Marrom Mescla",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image1
        }
    ],
}, {
    "id": 2,
    "nome": "Corano Preto",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image2
        }
    ],
}, {
    "id": 3,
    "nome": "Corino Branco",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image3
        }
    ],
}, {
    "id": 4,
    "nome": "Corino Castanho",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image4
        }
    ],
}, {
    "id": 5,
    "nome": "Corino NV Marrom",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image5
        }
    ],
}, {
    "id": 6,
    "nome": "Corino NV Preto",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image6
        }
    ],
}, {
    "id": 7,
    "nome": "Corino Tabaco Mescla",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image7
        }
    ],
}, {
    "id": 8,
    "nome": "Matelasse Branco",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image8
        }
    ],
}, {
    "id": 9,
    "nome": "Matelasse Marrom",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image9
        }
    ],
}, {
    "id": 10,
    "nome": "Matelasse Preto",
    "tipo": "Sintetico",
    "descricao": "Artigo sintético.",
    "imagens": [
        {
            "url": Image10
        }
    ],
}, {
    "id": 11,
    "nome": "Borgo 02",
    "tipo": "Linho",
    "descricao": "Artigo linho.",
    "imagens": [
        {
            "url": Image11
        }
    ],
}, {
    "id": 12,
    "nome": "Capri 01",
    "tipo": "Linho",
    "descricao": "Artigo linho.",
    "imagens": [
        {
            "url": Image12
        }
    ],
}, {
    "id": 13,
    "nome": "Linho Linen",
    "tipo": "Linho",
    "descricao": "Artigo linho.",
    "imagens": [
        {
            "url": Image13
        }
    ],
}, {
    "id": 14,
    "nome": "Savone 01",
    "tipo": "Linho",
    "descricao": "Artigo linho.",
    "imagens": [
        {
            "url": Image14
        }
    ],
}, {
    "id": 15,
    "nome": "Denver 02",
    "tipo": "Aveludado",
    "descricao": "Artigo acolchoado.",
    "imagens": [
        {
            "url": Image15
        }
    ],
}, {
    "id": 16,
    "nome": "Denver 06",
    "tipo": "Aveludado",
    "descricao": "Artigo acolchoado.",
    "imagens": [
        {
            "url": Image16
        }
    ],
}, {
    "id": 17,
    "nome": "Joli 01",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image17
        }
    ],
}, {
    "id": 18,
    "nome": "Joli 03",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image18
        }
    ],
}, {
    "id": 19,
    "nome": "Joli 04A",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image19
        }
    ],
}, {
    "id": 20,
    "nome": "Joli 06",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image20
        }
    ],
}, {
    "id": 21,
    "nome": "Joli 11R",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image21
        }
    ],
}, {
    "id": 22,
    "nome": "Joli 12",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image22
        }
    ],
}, {
    "id": 23,
    "nome": "Joli 13",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image23
        }
    ],
}, {
    "id": 24,
    "nome": "Joli 15R",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image24
        }
    ],
}, {
    "id": 25,
    "nome": "Joli 18",
    "tipo": "Aveludado",
    "descricao": "Artigo aveludado.",
    "imagens": [
        {
            "url": Image25
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