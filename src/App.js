import React from 'react';
import './App.scss';
import { TodoProvider } from './context/TodoProvider';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <main>
      <Header />

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
};

export default App;
