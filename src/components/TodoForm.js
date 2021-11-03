import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoProvider';

const TodoForm = () => {
  const { todoList, getLengthOfTodoItems, addTodoItem } = useTodoContext();
  const [todoItem, setTodoItem] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (todoItem.length > 0) {
      addTodoItem(todoItem);
      setTodoItem('');
    }
  };

  const handleOnChange = (e) => setTodoItem(e.target.value);

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>number of todo items: {getLengthOfTodoItems()}</h3>
      <input type="text" value={todoItem} onChange={handleOnChange} />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
