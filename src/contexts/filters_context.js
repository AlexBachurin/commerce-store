import React, { useEffect, useContext, useReducer } from "react";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_SORT } from "../actions";

import filters_reducer from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";
const FiltersContext = React.createContext();
const initial_state = {
    products: [],
    filtered_products: [],
    grid_view: true,
    sort: 'price-lowest'
}

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filters_reducer, initial_state);
    //pass products from products context
    const { products, products_loading } = useProductsContext();
    // load them every time we change products arr in products state
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
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
        console.log(value)
        dispatch({ type: UPDATE_SORT, payload: value })
    }
    // *** SORT PRODUCTS ***
    //sort products every time we change value of  sort variable in our state
    useEffect(() => {
        dispatch({ type: SORT_PRODUCTS, payload: state.sort })
    }, [state.sort])

    return <FiltersContext.Provider value={{
        ...state,
        products_loading,
        setGridView,
        setListView,
        updateSort
    }}>
        {children}
    </FiltersContext.Provider>
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}