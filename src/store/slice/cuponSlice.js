import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchCupon = createAsyncThunk(
    'cupon/fetchCupon',
    async () => {
        const resp = await fetch('http://localhost:3333/sale/send');
        const data = await resp.json();
        return data
    }
)

export const cuponSlice = createSlice({
    name: 'cupon',
    initialState: {
        list: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCupon.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchCupon.fulfilled, (state, {payload})=>{
                state.status = 'resolve';
                state.list = payload;
            })
            .addCase(fetchCupon.rejected, (state, {payload})=>{
                state.status = 'rejected';
                state.error = payload;
            })
    } 
})

export default cuponSlice.reducer;