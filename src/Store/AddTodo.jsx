


  import { createSlice } from "@reduxjs/toolkit";

     const addlist=createSlice({
        name:"todo",
        initialState:{
          todos:[]
        },
        reducers:{
                add:(state,action)=>{
                  state.todos.push(action.payload)
                }
        }
     })

export const {add}=addlist.actions
export  default addlist .reducer

