import React, { useState } from 'react';
import './styles.css';

const Display = ({ imagens, alt, notSelect }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <div className="product-image-show">
            <figure>
                <img src={imagens[activeImageIndex].url} alt={alt} className="zoom" />
            </figure>
            {
                notSelect ?
                    '' :
                    <div className="images">
                        {
                            imagens.map((image, index) => {
                                return (
                                    <button key={index} className={activeImageIndex === index ? 'active' : ''} type="button" onClick={() => { setActiveImageIndex(index) }}>
                                        <img src={image.url} alt={alt} />
                                    </button>
                                )
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Display;