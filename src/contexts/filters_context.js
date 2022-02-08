import React, { useState, useEffect, useContext, useReducer } from "react";
import { LOAD_PRODUCTS } from "../actions";

import filters_reducer from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";
const FiltersContext = React.createContext();
const initial_state = {
    products: [],
    filtered_products: [],
}

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filters_reducer, initial_state);
    //pass products from products context
    const { products } = useProductsContext();
    // load them every time we change products arr in products state
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
        console.log(state.products)
    }, [products])
    return <FiltersContext.Provider value={{
        ...state
    }}>
        {children}
    </FiltersContext.Provider>
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}