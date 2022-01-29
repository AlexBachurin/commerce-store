import React, { useContext, useEffect, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";

const ProductsContext = React.createContext();

const iniitialState = {

};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, iniitialState);

    return <ProductsContext.Provider value={{
        ...state
    }}>
        {children}
    </ProductsContext.Provider>
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
} 