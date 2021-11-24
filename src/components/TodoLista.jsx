import React from 'react';
import Todo from './Todo';




const TodoList = ({ todos, todoDelete, todoToogleCompleted }) => {
  return (
    <div>
      <h1>Todo List </h1>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          todoDelete={todoDelete}
          todoToogleCompleted={todoToogleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;