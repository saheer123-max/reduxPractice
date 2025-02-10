import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice({

  name:"counterr",
  initialState:{value:5},
  reducers:{
    increment:(state)=>{state.value+=1}
  }



})
export const {increment}=counter.actions
export default counter.reducer