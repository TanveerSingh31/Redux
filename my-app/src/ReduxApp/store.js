import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


// acts as store for state across application 

export const store = configureStore({
    reducer: { todoReducer }            // giving all reducers to store

    // all states of a feature will be stored in the reducer object that you provide 
    // for ex: state of "todoSlice" feature will be contained inside "todoReducer" object inside state of store 


});