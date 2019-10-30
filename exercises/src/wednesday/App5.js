import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/v1";

function App5() {

  //css
  const tStyle = {
    textAlign: 'justify',
    fontWeight: 'bold'
  };
  const tNorm = {
    fontWeight: 'normal',
    color: 'red'
  };

  const initialData = [
    { id: uuid(), todoText: "Wake up" },
    { id: uuid(), todoText: "Make Coffee" },
    { id: uuid(), todoText: "Drink Coffee" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
  console.log(todos)

  const addTodo = todo => {
    if (todo.id === "") { // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({ id: "", todoText: "" })
  };

  const deleteTodo = (index) => {
    console.log("delete", index)
    const newTodos = todos.filter(todo => todo.id !== index);
    setTodos([...newTodos]);
  }
  const editTodo = (index) => {
    console.log("edit", index);
    setNewTodo(todos.find(todo => todo.id === index));
  }


  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            addTodo={addTodo}
            nextTodo={newTodo}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <ul style={tStyle}>
        <li>What is meant by the react term “Lifting State Up”?</li>
        <p style={tNorm}>You connect and communicate to component above the present</p>
        <li>Where do you lift it up to?</li>
        <p style={tNorm}>Componenet above</p>
        <li>Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?</li>
        <p style={tNorm}>From top to bottom</p>
        <li>Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?</li>
        <p style={tNorm}>You get single source of truth. The parent componenet handles things</p>
      </ul>
    </div>
  );
}
export default App5;
