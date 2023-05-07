// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
// import { categoriesReducer } from "./reducers/categoriesReducer";
// import { productsReducer } from "./reducers/productsReducer";
// import { cuponReducer } from "./reducers/cuponReducer";
// import { basketReducer } from "./reducers/basketReducer";


// const rootReducer = combineReducers({
//     categories: categoriesReducer,
//     products: productsReducer,
//     cupon: cuponReducer,
//     basket: basketReducer
// })

// export const store = createStore(rootReducer, applyMiddleware(thunk))


import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";
import cuponSlice from "./slice/cuponSlice";



export const store = configureStore({
    reducer: {
        category: categoriesSlice,
        products: productsSlice,
        basket: basketSlice,
        cupon: cuponSlice
    }
})