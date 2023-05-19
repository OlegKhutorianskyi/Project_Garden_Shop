import { createSlice } from "@reduxjs/toolkit";


// export const fetchOrder = createAsyncThunk(
//     'basket/fetchOrder',
//     async () => {
//         const resp = await fetch('http://localhost:3333/order/send');
//         const data = await resp.json();
//         return data
//     }
// );


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: []
    },
    reducers: {
        add (state, {payload}) {
            const product = state.list.find(({id}) => id === payload)
        if (product) {
            const productCount = product.count++;
        } else {
            const newState = state.list.push( {id: payload, count: 1})
        }
        },
        removeProduct (state, {payload}) {
            state.list = state.list.filter(({id}) => id !== payload)
            
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

        },
        removeAll (state) {
            state.list = []
            
        },
        
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchOrder.pending, (state)=>{
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchOrder.fulfilled, (state, {payload})=>{
    //             state.status = 'resolve';
    //             state.list = payload;
    //         })
    //         .addCase(fetchOrder.rejected, (state, {payload})=>{
    //             state.status = 'rejected';
    //             state.error = payload;
    //         })
    // } 
})


export const {add, removeProduct, incrCount, decrCount, removeAll, cupon} = basketSlice.actions;
export default basketSlice.reducer;