import { configureStore } from "@reduxjs/toolkit";
import counter from "./Couter";  

const store= configureStore({

    reducer:{
        counter:counter,
    }
   
    
})
export default store

