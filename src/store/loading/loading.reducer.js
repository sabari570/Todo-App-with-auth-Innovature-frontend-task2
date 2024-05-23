import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
