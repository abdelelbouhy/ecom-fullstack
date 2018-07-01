import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Product = (props) => {
    const {title, image: {path, alt}, description, priceLabel, price} = props;

    return (
        <div className='product'>
            <img src={`dist${path}`} alt={alt} className='product-product_image' />
            <div className='product-bestseller'>bestseller</div>
            <div className='product-product_details'>
                <h1 className='product-product_details-title'>{title}</h1>
                <div className='product-product_details-description'>{description}</div>
                <div className='product-product_details-price_wrapper'>
                    <span className='product-product_details-price_wrapper-label'>{priceLabel}</span>
                    <span className='product-product_details-price_wrapper-price'>{price.toFixed(2)}</span>
                </div>
            </div>
            <div className='product-shop_now'>Shop Now</div>
        </div>
    );
};

Product.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.exact({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    priceLabel: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Product;
