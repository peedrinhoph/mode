import React, {useState} from 'react';
import './styles.css';

const Display = ({ imagens, alt }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <div className="product-image-show">
            <figure>
                <img src={imagens[activeImageIndex].url} alt="product" className="zoom" />
            </figure>
            <div className="images">
                {
                    imagens.map((image, index) => {
                        return (
                            <button key={index} className={activeImageIndex === index ? 'active' : ''} type="button" onClick={() => { setActiveImageIndex(index) }}>
                                <img src={image.url} alt={image.alt} />
                            </button>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Display;