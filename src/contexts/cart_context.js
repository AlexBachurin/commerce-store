import React, { useContext, useReducer } from "react";
import cartReducer from '../reducers/cart_reducer'
const CartContext = React.createContext();

const initialState = {
    cart: [],
    total_amount: 0,
    total_price: 0
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(initialState, cartReducer)
    return <CartContext.Provider value={{

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}