import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state) => { state.value += 1 },     // either modify the state, of just return the modified value of state, 
        removeFromCart: (state) => { return { value : state.value - 1} }            // DONT DO BOTH !, it will lead to errors
    }
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;