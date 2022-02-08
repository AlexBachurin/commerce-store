import React, { useState, useEffect, useContext, useReducer } from "react";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from "../actions";

import filters_reducer from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";
const FiltersContext = React.createContext();
const initial_state = {
    products: [],
    filtered_products: [],
    grid_view: true,
}

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filters_reducer, initial_state);
    //pass products from products context
    const { products, products_loading } = useProductsContext();
    // load them every time we change products arr in products state
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
        console.log(state.products)
    }, [products])

    //SET GRID VIEW / LIST VIEW
    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW })
    }
    const setListView = () => {
        dispatch({ type: SET_LISTVIEW })
    }
    return <FiltersContext.Provider value={{
        ...state,
        products_loading,
        setGridView,
        setListView
    }}>
        {children}
    </FiltersContext.Provider>
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}