import React from 'react';
import { useTodoContext } from '../../../context/TodoProvider';
import './TodoListStatusBar.scss';

const TodoListStatus = () => {
  const { setStatus, getLengthOfTodoItems } = useTodoContext();

  return (
    <div className="status">
      <div className="status__items-left">
        {getLengthOfTodoItems()} items left
      </div>

      <div className="aac-wrapper">
        <button
          className="status-btns status__all"
          onClick={() => setStatus('')}
        >
          All
        </button>
        <button
          className="status-btns status__active"
          onClick={() => setStatus('active')}
        >
          Active
        </button>
        <button
          className="status-btns status__completed"
          onClick={() => setStatus('completed')}
        >
          Completed
        </button>
      </div>

      <button className="status-btns status__clear-completed">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListStatus;
