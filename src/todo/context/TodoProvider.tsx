import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [],
  completed: 0,
  pending: 0,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id } });
  };

  const addTodo = (id: string, desc: string) => {
    dispatch({ type: 'addTodo', payload: { id, desc, completed: false } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
