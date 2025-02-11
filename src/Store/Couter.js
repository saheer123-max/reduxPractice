import { createSlice, configureStore } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
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

// Actions export ചെയ്യുക
export const { increment } = counter.actions;

// Store export ചെയ്യുക (Reducer അല്ല)
export default store;
