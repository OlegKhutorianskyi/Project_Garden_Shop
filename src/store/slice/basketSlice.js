import { createSlice } from "@reduxjs/toolkit";

const basket = JSON.parse(localStorage.getItem('basket')) ?? [];
const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket))


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: []
    },
    reducers: {
        add (state, {payload}) {
            const product = state.list.find(({id}) => id === payload)
        if (product) {
            const productCount = product.count++
            writeToLocalStorage(productCount)
        } else {
            const newState = state.list.push( {id: payload, count: 1})
            writeToLocalStorage(newState)
        }
        },
        removeProduct (state, {payload}) {
            state.list = state.list.filter(({id}) => id !== payload)
            writeToLocalStorage(state.list)
        },
        incrCount (state, {payload}) {
            let findProduct = state.list.find(({id}) => id === payload)
            findProduct.count++
            console.log(findProduct);
        },
        decrCount (state, {payload}) {
            let findProduct = state.list.find(({id}) => id === payload)
            findProduct.count--
            if (findProduct.count === 0) {
                state.list = state.list.filter(({id}) => id !== payload)
            }
            writeToLocalStorage(findProduct)
        },
        removeAll (state) {
            state.list = []
            writeToLocalStorage(state.list)
        },
        
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCategories.pending, (state)=>{
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchCategories.fulfilled, (state, {payload})=>{
    //             state.status = 'resolve';
    //             state.list = payload;
    //         })
    //         .addCase(fetchCategories.rejected, (state, {payload})=>{
    //             state.status = 'rejected';
    //             state.error = payload;
    //         })
    // } 
})


export const {add, removeProduct, incrCount, decrCount, removeAll, cupon} = basketSlice.actions;
export default basketSlice.reducer;