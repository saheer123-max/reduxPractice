
import React from 'react'
 import { useSelector, useDispatch } from "react-redux";
 import { incremnt } from './Store/Couter';
 import { login, logout } from "./Store/Compinator";

function App() {
  const dispatch=useDispatch()
  const coum=useSelector((state)=>state.counter.value)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>

    <button onClick={()=>dispatch(incremnt())}>dfgb</button>
<h1>{coum}</h1>



<h2>User is {isAuthenticated ? "Logged In" : "Logged Out"}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>


    </div>
  )
}

export default App