import React from 'react';
import { useCartContext } from '../contexts/cart_context';
import CartItem from './CartItem';
const CartItemsList = () => {
    const { cart } = useCartContext();
    return <>
        {cart.map(item => {
            return <CartItem key={item.id} {...item} />
        })}
    </>;
};

export default CartItemsList;
