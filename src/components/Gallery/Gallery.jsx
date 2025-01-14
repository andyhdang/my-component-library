import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="gallery-item1"><img src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/short-gallery/COR_MY25_0004_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048" alt="2025 Corolla arial shot" /></div>
            <div className="gallery-item2"><img src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/short-gallery/COR_MY23_0016_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048" alt="2025 Corolla front" /></div>
            <div className="gallery-item3"><img src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/short-gallery/COH_MY25_0010_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048" alt="2025 Corolla lifestyle " /></div>
        </div>
    );
};

export default Gallery;