import React from "react";
import './App.css'
import { useSelector , useDispatch } from "react-redux";
import { addTodo , removeTodo } from "./Actions/action";
import { useState } from "react";

function App() {

  const [counter , setCounter] = useState(0)
  const [todo , setTodo] = useState("");
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter , todo))
      setCounter(counter + 1)
      setTodo("")
    }
  }

  return (
    <div className="container">
      <div className="App">
        <div className="inner">
        <h1 className="header">TODO</h1>
      <div className="todoAdd">
      <div className="todo">
      <input
        className="inputAdd" 
        type="text" 
        value={todo} 
        onChange={e => setTodo(e.target.value)}/>
    </div>
    <button
      className="buttonAdd"
      onClick={todoSubmitHandler}>OK</button>
      </div>

    <div className="todos">
      <ul>
        {
          todos?.map((todo) => (
            <li className="todo" key={todo.id}>
              <p>{todo.task}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>OK</button>
            </li>
          ))
        }
      </ul>
    </div>
        </div>
    </div>
    </div>
  );
}

export default App;
