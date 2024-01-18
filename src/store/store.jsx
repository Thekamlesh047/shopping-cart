import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import apiData from "./apiData";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        Api: apiData,
    }
})
