import { createSlice } from "@reduxjs/toolkit";


const changecolur=createSlice({
    name:"them",
    initialState:{isblack:false},
    reducers:{
    change:(state)=>{state.isblack = !state.isblack}}
})

export const {change}=changecolur.actions 
export default changecolur.reducer