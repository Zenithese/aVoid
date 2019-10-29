import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, body: "create todo app" },
      { id: 2, body: "rejoice! for it's brief..." }
    ],
    thing: this.props.thing
  }
  componentDidMount(){
    console.log(this.state.thing)
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    // console.log(todo)
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
    // this.props.createTodo(todo)
  }
  render(){
    console.log(this.props.thing)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">aVoidance</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
