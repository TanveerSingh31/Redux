import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';



export default function Homepage() { 

    const todoList = useSelector( state =>  state.todoReducer.todoList );
    console.log("todoList => ", todoList);

    return (
        <>
            <div> My Todo </div>
            <ul>
                { todoList.map( todo => <li id={todo.id}>{todo.text}</li>) }
            </ul>
        </>
    )
}
