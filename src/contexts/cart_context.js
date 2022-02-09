import React, { useContext } from "react";

const CartContext = React.createContext();


export const CartProvider = ({ children }) => {
    return <CartContext.Provider value={{

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}