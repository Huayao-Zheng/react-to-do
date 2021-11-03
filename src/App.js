import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
