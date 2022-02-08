import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT } from "../actions";


const filters_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return { ...state, products: action.payload, filtered_products: action.payload }
    }
    if (action.type === SET_GRIDVIEW) {
        return { ...state, grid_view: true }
    }
    if (action.type === SET_LISTVIEW) {
        return { ...state, grid_view: false }
    }
    if (action.type === UPDATE_SORT) {
        return { ...state, sort: action.payload }
    }
    throw new Error('no matching action type')

}

export default filters_reducer