import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from './Store/Couter'


function App() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)
  return (
    <div>

    <button onClick={()=>dispatch(increment())}>increment</button>
    <h1>{count}</h1>


    </div>
  )
}

export default App