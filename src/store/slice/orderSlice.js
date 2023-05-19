import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchOrder = createAsyncThunk(
    'order/fetchOrder',
    async () => {
        const resp = await fetch('http://localhost:3333/order/send');
        const data = await resp.json();
        return data
    }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        list: []
    },
    reducers: {
        // resp (state, {payload}) {
        //     state.list = payload ? state.list : {}
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchOrder.fulfilled, (state, {payload})=>{
                state.status = 'resolve';
                state.list = payload;
            })
            .addCase(fetchOrder.rejected, (state, {payload})=>{
                state.status = 'rejected';
                state.error = payload;
            })
    } 
})

export default orderSlice.reducer;