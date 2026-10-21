import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    { id: 1, description: 'Learn Redux', isDone: false },
    { id: 2, description: 'Build a ToDo app', isDone: true },
    { id: 3, description: 'Practice editing tasks', isDone: false },
  ],
  filter: 'all',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      })
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload.id)
      if (task) {
        task.description = action.payload.description
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
