import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const defaultValue = [
  {
    id: 2,
    content: 'Complete online JavaScript course',
    completed: false,
  },
  {
    id: 3,
    content: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: 4,
    content: '10 minutes meditation',
    completed: false,
  },
  {
    id: 5,
    content: 'Read for 1 hour',
    completed: false,
  },
  {
    id: 6,
    content: 'Pick up groceries',
    completed: false,
  },
  {
    id: 7,
    content: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];

let id = 1;

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(defaultValue);
  console.log(todoList);

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
