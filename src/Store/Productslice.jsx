import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [
      { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
      { id: 2, name: "Shirt", category: "Clothing", price: 1500 },
      { id: 3, name: "Mobile Phone", category: "Electronics", price: 20000 },
      { id: 4, name: "Shoes", category: "Footwear", price: 3000 },
      { id: 5, name: "Washing Machine", category: "Appliances", price: 25000 },
    ],
    product:[]
  };
  

const productslice=createSlice({
     name:"product",
     initialState,
     reducers:{
        filterd:(state,action)=>{state.product=state.products.filter((items)=>items.category===action.payload)
           .sort((a,b)=>a.price-b.price) 
        }
     }
})

export const {filterd}=productslice.actions
export default productslice.reducer