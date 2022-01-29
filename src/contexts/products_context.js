import React, { useContext, useEffect, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";
const ProductsContext = React.createContext();

const iniitialState = {
    isSidebarOpen: false,

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