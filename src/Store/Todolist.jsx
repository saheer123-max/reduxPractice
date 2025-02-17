// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addtodo } from "./AddTodo"
// function Todolist() {
//   const dispatch = useDispatch()
//   const [todotext, settodotext] = useState('');
//   const {todos} = useSelector((state) => state.todo);

//   const handleAddTodo = () => {
//     if (todotext.trim()) {
//       dispatch(addtodo(todotext));
//       settodotext(''); // Clear the input field
//     }
//   };

//   return (


//     <div>
//       <h1>To Do List</h1>
//       <input
//         type='text'
//         value={todotext}
//         onChange={(e) => settodotext(e.target.value)}
//         placeholder='Something text'
//       />
//       <button onClick={handleAddTodo}>Add List</button>

//       <ul>
//         {todos.map((todo) => (
//           <li >{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );


// }

// export default Todolist
















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