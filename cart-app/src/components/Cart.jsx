import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cart';


const Cart = () => {

    const dispatch = useDispatch();
    const value = useSelector((state) => { 
        console.log("state 123 => ", state); 
        return state.counterReducer.value
    });

    return(
        <div>
            <div> items inside cart = { value } </div>
            <button onClick={() => {dispatch(addToCart())}}> Add Item </button>
            <button onClick={() => {dispatch(removeFromCart())}}> Remove Item </button>
        </div>
    )

}

export default Cart;