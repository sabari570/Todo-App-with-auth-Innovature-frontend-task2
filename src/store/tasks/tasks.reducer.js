import { createSlice } from "@reduxjs/toolkit";

const tasks = [];

const INITIAL_TASKS_LIST = {
  tasks: tasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_TASKS_LIST,
  reducers: {
    setTaskList: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTaskList } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
