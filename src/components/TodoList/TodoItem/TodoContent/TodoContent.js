import React from 'react';
import './TodoContent.scss';

const TodoContent = ({ todoItem, isCompleted }) => {
  return (
    <div className={`todo__content ${isCompleted ? 'cross-out' : null}`}>
      {todoItem}
    </div>
  );
};

export default TodoContent;
