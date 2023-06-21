import { NewTodo } from './components/NewTodo';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
      <NewTodo />
    </TodoProvider>
  );
};
