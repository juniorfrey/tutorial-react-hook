import React, { useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoLista';

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc. del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc. del Todo #2",
    completed: true,
  },
];


const App = () => {
    const [todos, setTodos] = useState(initialTodos);

    const todoDelete = (todoId) => {
        const changedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(todo => {
            const todoEdit = {
                ...todo,
                completed: !todo.completed
            }
            if(todo.id === todoId){
                return todoEdit;
            }else{
                return todo
            }
        })
        setTodos(changedTodos);
    }

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <TodoList
              todos={todos}
              todoDelete={todoDelete}
              todoToogleCompleted={todoToogleCompleted}
            />
          </div>
          <div className="col-lg-4">
            <TodoForm />
          </div>
        </div>
      </div>
    );
}

export default App;