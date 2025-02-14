const { combineReducers, createStore } = require("redux");

// Counter Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// User Reducer
function userReducer(state = { name: "Guest" }, action) {
  switch (action.type) {
    case "SET_USER":
      return { name: action.payload };
    default:
      return state;
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// Create Store
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => console.log("Updated State:", store.getState()));

// Dispatch Actions
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "SET_USER", payload: "Saheer" });
