import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

import './Todo.css';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo } = useTodos();

  return (
    <div
      className="todo__item"
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
        border: todo.completed ? '2px solid limegreen' : 'none',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </div>
  );
};
