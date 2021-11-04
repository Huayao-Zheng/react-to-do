import React from 'react';
import './App.scss';
import { TodoProvider } from './context/TodoProvider';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

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
