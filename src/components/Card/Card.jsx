import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Button from '../Button/Button';

const Card = ({ title, content, price, img, alt, detail }) => {
    return (
        <div className="card">
            <img src={img} alt={alt} className="card-image" />
            
            <div className='wrapper'>
                <p className="card-detail">{detail}</p>
                <h2 className="card-title">{title}</h2>
                <p className="card-content">{content}</p>
                <p className="price">{price}</p>
                <Button
                    type='primary'
                    label='Explore'
                />
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
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Card;