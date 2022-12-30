import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map(element => <li key={element.index}>{element.name}</li> )}
    </ul>
  )
}

export default TodoList
