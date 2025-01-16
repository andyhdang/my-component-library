import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Button from '../Button/Button';

const Card = ({ title, content, price, img, alt, detail, backgroundColor }) => {
    return (
        <div className="card" style={{ backgroundColor }}>
            <img src={img} alt={alt} className="card-image" />
            
            <div className='wrapper'>
                <p className="card-detail">{detail}</p>
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
                <p className="card-price">{price}</p>

                <div className="button-group">
                    <Button
                        type='default'
                        label='Explore'
                        shape='pill'
                    />
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    detail: PropTypes.string,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};

Card.defaultProps = {
    backgroundColor: 'white',
};

export default Card;