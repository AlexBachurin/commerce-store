import React, { useContext, useReducer } from "react";
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../actions";
import cartReducer from '../reducers/cart_reducer'
const CartContext = React.createContext();

const initialState = {
    cart: [],
    total_amount: 0,
    total_price: 0
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // *** ADD ITEM TO CART ***
    const addToCart = (id, name, amount, color, price, stock, image) => {
        //pass id with id of id+color, so we wont add item with same color twice as separate item
        dispatch({ type: ADD_TO_CART, payload: { id: id + color, name, amount, color, price, stock, image } })
    }
    // *** REMOVE ITEM FROM CART ***
    const removeItemFromCart = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id })
    }
    return <CartContext.Provider value={{
        ...state,
        addToCart,
        removeItemFromCart

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}