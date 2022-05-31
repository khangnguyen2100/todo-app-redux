import { createSelector } from "@reduxjs/toolkit"

export const todoListSelector = data => data.todoList

export const searchFilterSelector = data => data.filters.search
export const statusFilterSelector = data => data.filters.status
export const priorityFilterSelector = data => data.filters.priority

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchFilterSelector,
  statusFilterSelector,
  priorityFilterSelector,

  (todoList, searchText, status, priorities) => {
    return todoList.filter(todo => {
      let checkSearch = todo.name.includes(searchText)

      let checkCompleted = status == 'Completed' ? todo.completed : !todo.completed
      if(status == "All") checkCompleted = true

      let checkPriority = priorities.includes(todo.priority) 
      if(priorities.length == 0) checkPriority = true

      return checkSearch && checkCompleted && checkPriority

    })
  }
)
