import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { cuponReducer } from "./reducers/cuponReducer";
import { basketReducer } from "./reducers/basketReducer";



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cupon: cuponReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))