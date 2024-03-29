import React from 'react';
import './styles.css';

import Display from '../../components/ImageDisplay';
import DisplayDimenssion from '../../components/DimenssionDisplay';

import Image1 from '../../assets/images/products/mesa_bistro.jpg';
import Image2 from '../../assets/images/products/mesa_bistro_conjunto.jpg';

const lista = [{
    "id": 1,
    "nome": "Mesa Bistrot",
    "modelo": "Mesas",
    "referencia": "MDMBT1000",
    "descricao": "Mesa de ferro, tampo MDF com lamina de Imbuia Escura diâmetro de 100cm.",
    "tampo": "Imbuia Escura",
    "pintura": "Grafite",
    "dimensao": [
        {
            "comprimento": "0cm",
            "profundidade": "100cm",
            "altura": "80cm"
        },
    ],
    "imagens": [
        {
            "url": Image1
        },
        {
            "url": Image2
        }
    ], 
    "observacao": "Cores podem variar de acordo com a configuração do seu monitor."
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
                                <Display imagens={item.imagens} alt={item.descricao} />
                                <h2 className="product-title-show">REF. {item.referencia}</h2>
                                <DisplayDimenssion dimenssion={item.dimensao} />
                                <p className="product-text-show">
                                    {item.descricao}
                                    <br /><br />Estrutura: {item.pintura}
                                    <br />Tampo: {item.tampo}
                                    <br /><br /><small>* <i>Produto feito sob encomenda.</i></small>
                                    <br /><small>* <i>{item.observacao}</i></small>
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