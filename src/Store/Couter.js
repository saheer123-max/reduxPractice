

 import { createSlice } from "@reduxjs/toolkit";

const plusone=createSlice({
  name:"counterR",initialState:{value:5},reducers:{
    incremnt:(state)=>{
    state.value+=1
    }
  }
})


export const {incremnt}=plusone.actions
export default plusone.reducer