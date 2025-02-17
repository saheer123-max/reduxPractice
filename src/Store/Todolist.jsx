


import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add } from './AddTodo'
function Todolist() {
  const [text,settext]=useState("")
  const todos=useSelector((state)=>state.todo.todos)
  const dispatch=useDispatch()
  const handlestate=()=>{
      if(text){
        dispatch(add(text))
      }
      settext("")
  }
  return (
    <div>
      

<input type='text'
onChange={(e)=>settext(e.target.value)}></input>

<button onClick={handlestate}></button>

   <ul>
      {todos.map((itm)=>(
        <li>{itm}</li>
      )
        
      )}
      
   </ul>



    </div>
  )
}

export default Todolist