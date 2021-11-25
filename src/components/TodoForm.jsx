import React, {useState, useEffect} from 'react';

const initialFormValues = {
    title: '',
    description : ''
}
const TodoForm = ({ todoAdd, todoEdit, todoUpdate, settodoEdit }) => {
  const [formValues, seTformValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, seterror] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);
  useEffect(() => {
    if (todoEdit) {
      seTformValues(todoEdit);
    }else{
      seTformValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changeFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    seTformValues(changeFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      seterror("Debes indicar un titulo");
      return;
    }

    if (description.trim() === "") {
      seterror("Debes indicar una descripción");
      return;
    }

    // Agregar tarea
    if (todoEdit) {
      todoUpdate(formValues);
      setsuccessMessage("Actualizado con éxito");
    } else {
      todoAdd(formValues);
      setsuccessMessage("Agregado con éxito");
      seTformValues(initialFormValues);
    }

    setTimeout(() => {
      setsuccessMessage(null);
    }, 2000);

    seterror(null);
  };

  return (
    <div>
      <h1 className="display-4 text-success">
        
        {todoEdit ? "Editar tarea" : "Nueva Tarea"}
      </h1>

      <div className="d-grid">
        {todoEdit && (
          <button
            className="btn btn-warning btn-sm mt-2 mb-2 d-grid"
            onClick={() => settodoEdit(null)}
          >
            Nueva tarea
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm"
          placeholder="Titulo"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          className="form-control form-control-sm mt-2"
          placeholder="Descripción"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <div className="d-grid">
          <button className="btn btn-primary btn-sm mt-2 d-grid">
            {todoEdit ? "Actualizar tarea" : "Agregar Tarea"}
          </button>
        </div>
      </form>

      {
        //error ? (<div className="d-grid alert alert-danger mt-2">{error}</div>) : (null)
        error && <div className="d-grid alert alert-danger mt-2">{error}</div>
      }

      {
        //error ? (<div className="d-grid alert alert-danger mt-2">{error}</div>) : (null)
        successMessage && (
          <div className="d-grid alert alert-success mt-2">
            {successMessage}
          </div>
        )
      }
    </div>
  );
};

export default TodoForm;