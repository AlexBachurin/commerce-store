import React, { useEffect, useContext, useReducer } from "react";
import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../actions";

import filters_reducer from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";
const FiltersContext = React.createContext();
const initial_state = {
    products: [],
    filtered_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: 0,
        max_price: 0,
        min_price: 0,
        shipping: false
    }
}

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filters_reducer, initial_state);
    //pass products from products context
    const { products, products_loading } = useProductsContext();
    // load them every time we change products arr in products state
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
        //also sort products on initial load, default sort we can change in state
        dispatch({ type: SORT_PRODUCTS, payload: state.sort })
        console.log(state.products)
    }, [products])

    // *** SET GRID VIEW / LIST VIEW ***
    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW })
    }
    const setListView = () => {
        dispatch({ type: SET_LISTVIEW })
    }
    // *** UPDATE SORT ***
    const updateSort = (e) => {
        // const name = e.target.name;
        //get value from clicked select element and dispatch 
        //action to update sort with clicked value
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value })
    }
    // *** SORT PRODUCTS ***
    //sort products every time we change value of  sort variable in our state
    // useEffect(() => {
    //     dispatch({ type: SORT_PRODUCTS, payload: state.sort })

    // }, [state.sort, products, state.filters])

    // *** UPDATE FILTERS ***
    const updateFilters = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        // console.log(name, value);
        //for color
        if (name === 'color') {
            value = e.target.dataset.color;
            console.log(value)
        }
        //for shipping we checking if checked or not
        if (name === 'shipping') {
            value = e.target.checked;
            console.log(value)
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
    }

    // *** CLEAR FILTERS ***
    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS })
    }

    // *** FILTER PRODUCTS and SORT PRODUCTS ***
    // do it every time sort, filters or products change
    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS })
        dispatch({ type: SORT_PRODUCTS, payload: state.sort })
    }, [state.filters, state.sort, products])

    return <FiltersContext.Provider value={{
        ...state,
        products_loading,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters
    }}>
        {children}
    </FiltersContext.Provider>
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}