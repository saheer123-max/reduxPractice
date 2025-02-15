// import { configureStore } from "@reduxjs/toolkit";
// import counterslice from "./Couter"; // Ensure the file name matches

// const store = configureStore({
//   reducer: {
//     counter: counterslice,
//   },
// });

// export default store;


import { configureStore,combineReducers } from "@reduxjs/toolkit";
import plusone from "./Couter"


import authReducer from "./Compinator";

// Combine multiple reducers
const rootReducer = combineReducers({
  counter: plusone,
  auth: authReducer,
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});


export default store