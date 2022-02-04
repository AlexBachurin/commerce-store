import React from 'react';
import { ProductAddToCart, ProductStars } from '.';
import { formatPrice } from '../utils.js/helpers';
const ProductContent = ({ product }) => {
    const { name, price, id, stars, stock, reviews, colors, description, company } = product;
    return <section className='content'>
        <h2>{name}</h2>
        <ProductStars stars={stars} reviews={reviews} />
        <h5 className='price'>{formatPrice(price)}</h5>
        <p className="desc">{description}</p>
        <p className="info"><span>Availiable: </span> {stock} </p>
        <p className="info"><span>ID: </span> {id} </p>
        <p className="info"><span>Brand: </span> {company} </p>
        <ProductAddToCart colors={colors} stock={stock} />
    </section>;
};

export default ProductContent;
