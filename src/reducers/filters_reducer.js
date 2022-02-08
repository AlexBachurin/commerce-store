import { LOAD_PRODUCTS } from "../actions";


const filters_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return { ...state, products: action.payload, filtered_products: action.payload }
    }
    return state;
    throw new Error('no matching action type')
}

export default filters_reducer