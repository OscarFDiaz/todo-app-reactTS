import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

import './Todo.css';

export const TodoList = () => {
  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;
  const { todos } = useTodos();

  return (
    <div className="todo__list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
