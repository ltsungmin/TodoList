import React, { useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

const TodoProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialState);

  const addTodo = name => {
    setTodos([...todos, { name, index: 1 + Math.random() }])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return(
    <TodoContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;
