import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = ({size='', label='Button', onClick, type='default', shape='rounded', leadingIcon, trailingIcon, isFullWidth, isDisabled}) => {
    return (
        <button className={`${size} ${type} ${shape} ${isFullWidth? 'full-width': ''} ${isDisabled? 'disabled':''}`} onClick={onClick}>
            {leadingIcon}{label}{trailingIcon}
        </button>
    );
};

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'default']),
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['default', 'primary', 'subtle', 'dashed', 'text', 'link']),
    leadingIcon: PropTypes.element,
    trailingIcon: PropTypes.element,
    isFullWidth: PropTypes.bool,
    shape: PropTypes.oneOf(['rounded', 'circular']),
    isDisabled: PropTypes.bool,
};

export default Button;