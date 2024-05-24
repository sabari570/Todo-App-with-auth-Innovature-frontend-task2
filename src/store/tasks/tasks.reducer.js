import { createSlice } from "@reduxjs/toolkit";

const INITIAL_TASKS_LIST = {
  tasks: [],
  selectedTask: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_TASKS_LIST,
  reducers: {
    setTaskList: (state, action) => {
      state.tasks = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setTaskList, setSelectedTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
