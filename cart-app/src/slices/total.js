import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};

export const cartSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        addToCart: (state) => state + 1,
        removeFromCart: (state) => state - 1
    }
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;