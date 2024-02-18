import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/cart.js';
import totalReducer from '../slices/total.js';


const store = configureStore({
    reducer: { counterReducer, totalReducer  }
});


export default store;