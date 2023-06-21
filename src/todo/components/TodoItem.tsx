import { Todo } from '../interfaces/interfaces';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const handleDoubleClick = () => {
    console.log('handleDbClick', todo.desc);
  };
  return <li onDoubleClick={handleDoubleClick}>{todo.desc}</li>;
};
