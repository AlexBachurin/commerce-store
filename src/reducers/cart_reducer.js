import { ADD_TO_CART } from "../actions";

const cartReducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, name, amount, color, price, stock, image } = action.payload;
        let newItem = {}
        //first check if we have item with same id already in cart
        let tmpItem = state.cart.find(item => item.id === id);
        //if we do, then just change amount of this item, and return state
        if (tmpItem) {
            tmpItem.amount += amount;
            //check that amount shouldnt be more than max amount in stock
            if (tmpItem.amount > tmpItem.max) {
                tmpItem.amount = tmpItem.max;
            }
            return { ...state, cart: [...state.cart] }
        } else {
            //create new item if we dont have with same id in cart 
            newItem = { id, name, amount, color, price, max: stock, image };
            return { ...state, cart: [...state.cart, newItem] };
        }


    }

}

export default cartReducer;