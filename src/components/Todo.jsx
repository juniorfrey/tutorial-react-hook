import React from 'react'

const Todo = ({ todo, todoDelete, todoToogleCompleted, settodoEdit }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-end">
          {todo.title}
          <button
            onClick={() => todoToogleCompleted(todo.id)}
            className={`btn ${
              todo.completed ? "btn-outline-success" : "btn-success"
            } btn-sm ms-2`}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text text-end">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => settodoEdit(todo)}
          >
            Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => todoDelete(todo.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo
