import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoHeader() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = React.useState({
    addTask: ""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setTitle({
      ...title,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(title.addTask)
  }

  return (
    <div>
      <input type="text" name="addTask" value={title.addTask} onChange={handleChange} />
      <button onClick={handleSubmit}>click</button>
    </div>
  )
}

export default TodoHeader;
