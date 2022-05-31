import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name : 'filters',
  initialState : {
    search : '',
    status : 'all',
    priority : []
  },
  reducers : {
    searchFilterAction : (state, action) => {
      state.search = action.payload
    },
    statusFilterAction : (state, action) => {
      state.status = action.payload
    },
    priorityFilterAction : (state, action) => {
      state.priority = action.payload
    },
  }
})
export default filtersSlice