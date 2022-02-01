import React, { useContext, useEffect, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from "../actions";
import { products_url } from "../utils.js/constants";
import axios from 'axios'
const ProductsContext = React.createContext();

const iniitialState = {
    isSidebarOpen: false,
    featuredProducts: [],
    products: [],
    products_loading: false,
    products_error: false

};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, iniitialState);

    // *** Sidebar ***
    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }
    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    /// *** FETCH PRODUCTS ***
    const fetchProducts = async () => {
        //first dispatch that we beginning to fetch , so we can turn loading to true
        dispatch({ type: GET_PRODUCTS_BEGIN })
        try {
            const response = await axios.get(`${products_url}`)
            console.log(response);
            //if we getting response, display data and set products and featured products
            if (response) {
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data })
            }
        } catch (error) {
            //if some error while fetching occured dispatch an error
            dispatch({ type: GET_PRODUCTS_ERROR })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <ProductsContext.Provider value={{
        ...state,
        openSidebar,
        closeSidebar
    }}>
        {children}
    </ProductsContext.Provider>
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
} 