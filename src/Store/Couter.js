import { createSlice, configureStore } from "@reduxjs/toolkit";

const counter = createSlice({
  
  initialState: { value: 5 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Store സൃഷ്ടിക്കൽ 
const store = configureStore({
  reducer: {
    counter: counter.reducer, // 🔹 `counter` അല്ല, `counter.reducer`
  },
});

export const { increment } = counter.actions;

export default store;
