import React from 'react';
import { useTodoContext } from '../../context/TodoProvider';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';
import TodoListStatusBar from './TodoListStatusBar/TodoListStatusBar';

const TodoList = () => {
  const { status, todoList, getActiveTodoItems, getCompletedTodoItems } =
    useTodoContext();

  if (status === 'active') {
    return (
      <>
        <ul className="todos">
          {getActiveTodoItems().map(({ id, content }) => (
            <TodoItem key={id} content={content} id={id} />
          ))}
        </ul>
        <TodoListStatusBar />
      </>
    );
  } else if (status === 'completed') {
    return (
      <>
        <ul className="todos">
          {getCompletedTodoItems().map(({ id, content }) => (
            <TodoItem key={id} content={content} id={id} />
          ))}
        </ul>
        <TodoListStatusBar />
      </>
    );
  }

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
