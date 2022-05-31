import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name : 'todoList',
  initialState : [
    {
      id : 1,
      name : 'giat do',
      completed : false,
      priority : "Low"
    },
    {
      id : 2,
      name : 'an com',
      completed : true,
      priority : "Medium"
    },
    {
      id : 3,
      name : 'rua chen',
      completed : false,
      priority : "High"
    }
  ],
  reducers : {
    addTodo : (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus : (state, action) => {
      const [currentTodo] = state.filter(todo => {
        return todo.id == action.payload
      })
      currentTodo.completed = !currentTodo.completed
    },
  }
})
export default todoListSlice