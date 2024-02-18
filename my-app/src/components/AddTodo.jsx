import React, { useState } from 'react';
import { useDispatch } from 'react-redux';    // imp! useDispatch, uses "reducer" function to change data in "Store" 
import { addTodo } from '../features/todo/todoSlice.js';



const AddTodo = () => {

    let [task, setTask] = useState('');
    const dispatch = useDispatch();


    function addItem(e) {
        e.preventDefault();
        dispatch(addTodo(task));    /* here we will specify which reducer method is to be used, & call it inside dispatcher and we are sending action.payload , while calling the reducer function , which it expects to do changes */
        setTask('');  // emptying the input field 
    }   

    return (
        <form onSubmit={addItem}>
            <input value={task} onChange={(e) => { setTask(e.target.value)}}></input>
            <button type='submit'> Add </button>
        </form>
    )

}

export default AddTodo;