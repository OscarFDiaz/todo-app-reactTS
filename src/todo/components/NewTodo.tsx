import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

export const NewTodo = () => {
  const [input, setinput] = useState('');

  const { addTodo, currentTodoId } = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === '') {
      alert('Escribe que te falta por hacer');
      return;
    }

    addTodo((currentTodoId + 1).toString(), input, false);
    setinput('');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinput(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tarea"
        id="inputTarea"
        value={input}
        onChange={handleChange}
        placeholder="Por hacer..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
