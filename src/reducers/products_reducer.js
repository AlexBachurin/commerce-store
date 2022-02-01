import { SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR } from "../actions";


const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, isSidebarOpen: true }
    }
    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, isSidebarOpen: false }
    }
    if (action.type === GET_PRODUCTS_BEGIN) {
        return { ...state, products_loading: true }
    }
    if (action.type === GET_PRODUCTS_SUCCESS) {
        //get featured products aswell by filtering data we get in payload, also slice it to get only 3 products, since we dont need them all
        const featuredProducts = action.payload.filter(item => item.featured === true).slice(0, 3)
        return { ...state, products: action.payload, featuredProducts, products_loading: false }
    }
    if (action.type === GET_PRODUCTS_ERROR) {
        console.log('error occured')
        //if error occured disable loading and set error state to true
        return { ...state, products_error: true, products_loading: false }
    }
    if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
        //set loading to true and set error to false to avoid bugs
        return { ...state, single_product_error: false, single_product_loading: true }
    }
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        return { ...state, single_product_loading: false, single_product: action.payload }
    }
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
        return { ...state, single_product_loading: false, single_product_error: true }
    }
    throw new Error('No matching action type')
}

export default products_reducer;