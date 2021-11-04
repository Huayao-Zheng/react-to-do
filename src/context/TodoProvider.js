import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const defaultValue = [
  {
    id: 1,
    content: 'work out',
    completed: false,
  },
];

let id = 1;

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(defaultValue);

  const getLengthOfTodoItems = () => todoList.length;

  const addTodoItem = (content) => {
    id++;
    setTodoList([...todoList, { id, content, completed: false }]);
  };

  const deleteTodoItem = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const completeTodoItem = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const contextValue = {
    todoList,
    getLengthOfTodoItems,
    addTodoItem,
    deleteTodoItem,
    completeTodoItem,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
