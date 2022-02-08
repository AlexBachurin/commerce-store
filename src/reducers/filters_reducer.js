import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";


const filters_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        //get max price of item
        const prices = action.payload.map(item => item.price);
        const maxPrice = Math.max(...prices);
        //!!! very important to spread products we pass in payload so we wont point on the same object
        return { ...state, products: [...action.payload], filtered_products: [...action.payload], filters: { ...state.filters, max_price: maxPrice, price: maxPrice } }
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
    if (action.type === UPDATE_FILTERS) {
        const name = action.payload.name;
        const value = action.payload.value;
        //only update in this scenario, if we have object inside state, first spread it, then dynamically change value [name] : value
        return { ...state, filters: { ...state.filters, [name]: value } }
    }
    if (action.type === CLEAR_FILTERS) {
        //get max price of item
        const prices = state.products.map(item => item.price);
        const maxPrice = Math.max(...prices);
        //reset filters to initial state
        return { ...state, filters: { text: '', category: 'all', company: 'all', color: 'all', price: maxPrice, shipping: false } }
    }
    if (action.type === FILTER_PRODUCTS) {
        //create a copy of an array to prevent mutations + if we filtering we allways need original data
        let tmpProducts = [...state.products];
        const { text, company, category, color, price, shipping } = state.filters;
        //filtering
        //text
        if (text) {
            tmpProducts = tmpProducts.filter(item => {
                return item.name.startsWith(text);
            })
        }
        //category
        if (category !== 'all') {
            tmpProducts = tmpProducts.filter(item => {
                return item.category === category;
            })
        }
        //company
        if (company !== 'all') {
            tmpProducts = tmpProducts.filter(item => {
                return item.company === company;
            })
        }
        //color 
        //price 
        if (price) {
            tmpProducts = tmpProducts.filter(item => {
                return item.price < price;
            })
        }
        //and after filtering we set it to filtered_products to state
        return { ...state, filtered_products: [...tmpProducts] };
    }
    throw new Error('no matching action type')

}

export default filters_reducer