const initState = {
  filters : {
    search : '',
    status : 'all',
    priority : []
  },
  todoList : [
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(state)
  console.log(action)

  switch (action.type)  {
    case "todoList/addTodo":
      return {
        ...state,
        todoList : [
          ...state.todoList,
          action.payload
        ]
      }
      
    default:
      return state
  }
}
export default rootReducer