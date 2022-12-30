import React from "react";
import TodoProvider from './context/TodoContext';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoHeader />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
