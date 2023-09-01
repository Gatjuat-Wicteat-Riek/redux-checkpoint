import { configureStore, createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      state.push({ id, description, isDone });
    },
    toggleTask: (state, action) => {
      const { id } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
  },
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export default store;
