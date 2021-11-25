import React from 'react';
import Todo from './Todo';




const TodoList = ({ todos, todoDelete, todoToogleCompleted, settodoEdit }) => {
  return (
    <div>
      <h1 className="display-4 text-success">Mi lista de tareas </h1>

      {todos.length === 0 ? (
        <div className="alert alert-primary">No hay tarea, Agrea una </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            settodoEdit={settodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;