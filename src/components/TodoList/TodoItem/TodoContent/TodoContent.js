import React from 'react';
import './TodoContent.scss';

const TodoContent = ({ content, isCompleted }) => {
  return (
    <div className={`todo__content ${isCompleted ? 'cross-out' : null}`}>
      {content}
    </div>
  );
};

export default TodoContent;
