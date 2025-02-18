import React from 'react'
 import { useSelector,useDispatch } from 'react-redux'
  import { change } from './colurslice'
function Colur() {
    const {isblack}=useSelector((state)=>state. theme)
    const dispatch=useDispatch()
  return (
    <div>

      

<div style={{backgroundColor:isblack?"green":"red",height:"100vh"}} >
    <button  style={{color:isblack?"black":"red",}} onClick={()=>dispatch(change())}> change

    </button>
</div>

    </div>
  )
}

export default Colur