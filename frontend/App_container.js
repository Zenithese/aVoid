import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTodos, createTodo, deleteTodo } from './actions/todo_actions'
import App from './App';

const mps = (state, props) => {
    return {
        thing: "thing",
        // todos: Object.values(state.entities.todos)
    }
};

const mdp = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos()),
    // fetchTodo: (todo) => dispatch(fetchTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default withRouter(connect(mps, mdp)(App));