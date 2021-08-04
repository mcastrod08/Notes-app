import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);

  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm('Are you sure?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }


  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className= "col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark><b>{todo.responsible}</b></mark></p>
            </div>
            <div className="card-footer">
              <button className = "btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
             <a className="navbar-brand" href="/">
               Notes APP 
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
            </a>
          </div>
        </nav>
        <div className="container" id="app">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo} /> 
            </div>
            <div className="col-md-8 p-4">
              <div className="row mt-4">
                {todos}
              </div>
            </div>
          </div>
        </div> 
        <Footer text="© Copyright 2019 María Castro. All rights reserved."/>
      </div>
    );
  }
}

export default App;