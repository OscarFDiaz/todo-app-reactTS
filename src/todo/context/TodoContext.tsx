import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
  addTodo: (id: string, desc: string, completed: boolean) => void;
};

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
