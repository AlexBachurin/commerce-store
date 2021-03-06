import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from "../actions";

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
    if (action.type === REMOVE_CART_ITEM) {
        const id = action.payload;
        //first copy cart arr to prevent bugs/mutation
        let tmpCart = [...state.cart];
        //remove item by id
        tmpCart = tmpCart.filter(item => item.id !== id);
        return { ...state, cart: [...tmpCart] }
    }
    if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
        const { id, operation } = action.payload;
        const tmpCart = state.cart.map(item => {
            //find item in cart by id to do provided operation with amount
            if (item.id === id) {
                if (operation === 'inc') {
                    let newAmount = item.amount + 1;
                    //also check max property of item to not exceed stock value
                    if (newAmount > item.max) {
                        newAmount = item.max;
                    }
                    //spread item and change amount to new one
                    return { ...item, amount: newAmount }
                }
                if (operation === 'dec') {
                    let newAmount = item.amount - 1;
                    //check to not go below 1
                    if (newAmount < 1) {
                        newAmount = 1;
                    }
                    return { ...item, amount: newAmount }
                }
            }

            return item;
        })

        return { ...state, cart: [...tmpCart] };
    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === COUNT_CART_TOTALS) {
        //functionality to get total and amount
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total_price: total, total_amount: amount }
    }

}

export default cartReducer;