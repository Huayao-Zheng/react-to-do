import React from 'react';
import { useTodoContext } from '../../context/TodoProvider';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';
import TodoListStatusBar from './TodoListStatusBar/TodoListStatusBar';

const TodoList = () => {
  const { todoList } = useTodoContext();

  return (
    <>
      <ul className="todos">
        {todoList.map(({ id, content }) => (
          <TodoItem key={id} content={content} id={id} />
        ))}
      </ul>
      <TodoListStatusBar />
    </>
  );
};

export default TodoList;
