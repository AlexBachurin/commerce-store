import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS } from "../actions";


const filters_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        //!!! very important to spread products we pass in payload so we wont point on the same object
        return { ...state, products: [...action.payload], filtered_products: [...action.payload] }
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
    if (action.type === SORT_PRODUCTS) {
        const value = action.payload;
        if (value === 'price-lowest') {
            const sortProducts = state.filtered_products.sort((a, b) => a.price - b.price);
            return { ...state, filtered_products: sortProducts }
        }
        if (value === 'price-highest') {
            const sortProducts = state.filtered_products.sort((a, b) => b.price - a.price)
            return { ...state, filtered_products: sortProducts }
        }
        if (value === 'name-A') {
            const sortProducts = state.filtered_products.sort((a, b) => a.name.localeCompare(b.name))
            return { ...state, filtered_products: sortProducts }
        }
        if (value === 'name-Z') {
            const sortProducts = state.filtered_products.sort((a, b) => b.name.localeCompare(a.name))
            return { ...state, filtered_products: sortProducts }
        }
    }
    throw new Error('no matching action type')

}

export default filters_reducer