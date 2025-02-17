import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addtodo} from  "./AddTodo"
function Todolist() {
  const dispatch=useDispatch()
  const [todotext, settodotext] = useState('');
  const todos = useSelector((state) => state.todo.todos);

  const handleAddTodo = () => {
    if (todotext.trim()) {
      dispatch(addtodo(todotext));
      settodotext(''); // Clear the input field
    }
  };

  return (
   

<div>
      <h1>To Do List</h1>
      <input
        type='text'
        value={todotext}
        onChange={(e) => settodotext(e.target.value)}
        placeholder='Something text'
      />
      <button onClick={handleAddTodo}>Add List</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );

  
}

export default Todolist