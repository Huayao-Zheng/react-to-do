import React from 'react';
import { useTodoContext } from '../context/TodoProvider';

const TodoList = () => {
  const { todoList, deleteTodoItem } = useTodoContext();

  return (
    <ul>
      {todoList.map((todoItem, idx) => (
        <li key={idx}>
          <button></button>
          {todoItem}

          <button onClick={() => deleteTodoItem(idx)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
