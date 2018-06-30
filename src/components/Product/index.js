import React from 'react';
import './index.scss';

const Product = (props) => {
    const {title, image: {path, alt}, description, priceLabel, price} = props;

    return (
        <div className='product'>
            <img src={`dist${path}`} alt={alt} className='product_image' />
            <div className='bestseller'>bestseller</div>
            <h1 className='title'>{title}</h1>
            <div className='product_description'>{description}</div>
            <div className='product_price_wrapper'>
                <span className='product_price_wrapper-label'>{priceLabel}</span>
                <span className='product_price_wrapper-price'>{price.toFixed(2)}</span>
            </div>
            <div className='product_shop_now'>Shop Now</div>
        </div>
    );
};


export default Product;