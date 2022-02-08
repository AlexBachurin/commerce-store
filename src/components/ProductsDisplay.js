import React from 'react';
import { GridView, ListView } from '.';
import { useFiltersContext } from '../contexts/filters_context';
const ProductsDisplay = () => {
    //get products to display from filters context
    const { filtered_products: products } = useFiltersContext();
    console.log(products)
    return <GridView products={products}></GridView>;
};

export default ProductsDisplay;
