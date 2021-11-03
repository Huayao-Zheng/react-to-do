import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(['defaultValue']);

  const getLengthOfTodoItems = () => todoList.length;

  const addTodoItem = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const deleteTodoItem = (targetIdx) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, idx) => idx !== targetIdx)
    );
  };

  const contextValue = {
    todoList,
    getLengthOfTodoItems,
    addTodoItem,
    deleteTodoItem,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
