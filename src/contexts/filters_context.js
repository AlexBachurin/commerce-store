import React, { useState, useEffect, useContext, useReducer } from "react";

import filters_reducer from "../reducers/filters_reducer";

const FiltersContext = React.createContext();
const initial_state = {
    products: [],
    filtered_products: [],
}

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filters_reducer, initial_state);
    return <FiltersContext.Provider value={{
        ...state
    }}>
        {children}
    </FiltersContext.Provider>
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}