import React from 'react';
import { useTodoContext } from '../../context/TodoProvider';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
  const { todoList } = useTodoContext();

  return (
    <ul className="todos">
      {todoList.map(({ id, content }) => (
        <TodoItem key={id} todoItem={content} id={id} />
      ))}
    </ul>
  );
};

export default TodoList;
