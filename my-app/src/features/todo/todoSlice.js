import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList: [ {id: 1, text: "this is task1"} ],

    // ............ we can keep more things here like authToken etc...
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {     // this object will contain all reducer functions for this feature

        addTodo: (state, action) => {

            const newTodo = { id: nanoid(), text: action.payload }       
            state.todoList.push(newTodo)      // this will push new todo to the array that contained all todos 
        },

        removeTodo: (state, action) => {
            const paylodId = action.payload     // get id from payload, for todo that needs to be removed
            state.todoList = state.todoList.filter( el => el.id != paylodId );   // filter out the todo to remove
        }
    }
})



export const { addTodo, removeTodo } = todoSlice.actions;    // exporting reducer functions, so it can be used by components

export default todoSlice.reducer       // all reducers need to be exported to "Store" 
