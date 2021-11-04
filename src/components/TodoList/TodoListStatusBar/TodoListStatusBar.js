import React from 'react';
import './TodoListStatusBar.scss';

const TodoListStatus = () => {
  return (
    <div className="status">
      <div className="status__items-left">5 items left</div>

      <div className="aac-wrapper">
        <button className="status-btns status__all">All</button>
        <button className="status-btns status__active">Active</button>
        <button className="status-btns status__completed">Completed</button>
      </div>

      <button className="status-btns status__clear-completed">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListStatus;
