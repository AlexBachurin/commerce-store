import React, { useContext, useReducer, useEffect } from "react";
import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from "../actions";
import cartReducer from '../reducers/cart_reducer';
//local storage
const getLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}
const CartContext = React.createContext();

const initialState = {
    cart: getLocalStorage(),
    total_amount: 0,
    total_price: 0,
    shipping_fee: 534
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
    // *** INCREASE/DECREASE ITEM AMOUNT ***
    //here we need id to find item which amount to increase/decrease
    //and type of operation, it will be text type of 'inc'/'dec'
    const toggleAmount = (id, operation) => {
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, operation } })
    }

    // *** CLEAR ALL CART ***
    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }
    // *** GET TOTAL AMOUNT OF ITEMS IN CART + TOTAL PRICE ***
    // every time state of cart changes, get total amounts
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
        dispatch({ type: COUNT_CART_TOTALS })
    }, [state.cart])
    return <CartContext.Provider value={{
        ...state,
        addToCart,
        removeItemFromCart,
        toggleAmount,
        clearCart

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
}