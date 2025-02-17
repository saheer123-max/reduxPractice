 import { createSlice } from "@reduxjs/toolkit";


 const AddTodo= createSlice({
  name:"todo",
  initialState:{
    todos:[]
  },
  reducers:{
    addtodo:(state,action)=>{
      state.todos.push(action.payload)
    }
  }

 })
 export const{addtodo}=AddTodo.actions
 export default AddTodo.reducer