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


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";
import cuponSlice from "./slice/cuponSlice";


const rootReducer = combineReducers({
    category: categoriesSlice,
    products: productsSlice,
    basket: basketSlice,
    cupon: cuponSlice
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['category','products']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
})


export const persistor = persistStore(store)
export default store