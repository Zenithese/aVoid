import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchTodos, createTodo, deleteTodo } from './actions/todo_actions'

class App extends Component {
  state = {
    // todos: [
    //   { id: 1, body: "create todo app" },
    //   { id: 2, body: "rejoice! for it's brief..." }
    // ],
    todos: this.props.todos
  }
  componentDidMount(){
    this.props.fetchTodos();
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
    this.props.createTodo(todo)
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">aVoidance</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

// export default App;

const mps = (state, props) => {
  return {
    todos: Object.values(state.entities.todos)
  }
};

const mdp = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  // fetchTodo: (todo) => dispatch(fetchTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default (connect(mps, mdp)(App));
