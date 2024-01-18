import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const  initialState={
    data:[],
    status:"idel"
};

const apiData = createSlice({
    name: "Api",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getItems.pending, (state) => {
            state.status = "loading"
        })
        .addCase(getItems.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "idel"
        })
        .addCase(getItems.rejected, (state) => {
            state.status = "erro"
        })
        
    }  

})

export const getItems = createAsyncThunk('items', async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
})







export const {add, remove} = apiData.actions
export default apiData.reducer;
