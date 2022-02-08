import React from 'react';
import { GridView, ListView, Loading } from '.';
import { useFiltersContext } from '../contexts/filters_context';
const ProductsDisplay = () => {
    //get products to display from filters context
    const { filtered_products: products, grid_view, products_loading } = useFiltersContext();

    if (products_loading) {
        return <Loading />
    }
    if (grid_view) {
        return <GridView products={products} />
    }
    return <ListView products={products}></ListView>
};

export default ProductsDisplay;
