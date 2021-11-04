import React, { useState } from 'react';
import { useTodoContext } from '../../../../context/TodoProvider';
import './CompleteButton.scss';

const CompleteButton = ({ toggleClass, isCompleted, id }) => {
  const { completeTodoItem } = useTodoContext();

  return (
    <div
      onClick={() => {
        completeTodoItem(id);
        toggleClass();
      }}
      className={`todo__complete-btn ${isCompleted ? 'completed' : null}`}
    >
      <div className={`btn-bg-filler ${isCompleted ? 'completed' : null}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
    </div>
  );
};

export default CompleteButton;
