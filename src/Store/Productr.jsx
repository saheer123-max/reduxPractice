import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { filterd } from './Productslice'
function Productr() {
    const product=useSelector((state)=>state.pro.product)
    const dispatch=useDispatch()
  return (
    <div>
     <button onClick={()=>dispatch(filterd("Electronics"))}>Electronics</button>
     <button onClick={()=>dispatch(filterd("Clothing"))}>jhuuy</button>
     <h3>Filtered Products</h3>
      {
        product.map((itm) =>( <div key={itm.id}>{itm.name} - ₹{itm.price}</div>))
      
       
      }

    </div>
  )
}

export default Productr