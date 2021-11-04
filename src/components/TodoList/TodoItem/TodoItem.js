import React, { useState } from 'react';
import CompleteButton from './CompleteButton/CompleteButton';
import DeleteButton from './DeleteButton/DeleteButton';
import TodoContent from './TodoContent/TodoContent';
import './TodoItem.scss';

const TodoItem = ({ id, todoItem }) => {
  const [isCompleted, setCompleted] = useState(false);

  const toggleClass = () => {
    setCompleted(!isCompleted);
  };

  return (
    <li className="todo">
      <CompleteButton
        toggleClass={toggleClass}
        isCompleted={isCompleted}
        id={id}
      />
      <TodoContent todoItem={todoItem} isCompleted={isCompleted} />
      <DeleteButton id={id} />
    </li>
  );
};

export default TodoItem;
