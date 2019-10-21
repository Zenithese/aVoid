import * as APIUtil from '../util/todo_util';

export const RECEIVE_TODO = "RECEIVE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const RECEIVE_ALL_TODOS = "RECEIVE_ALL_TODOS"

export const receiveAllTodos = (todos) => {
    return {
        type: RECEIVE_ALL_TODOS,
        todos,
    }
}

export const receiveTodo = (payload) => {

    return {
        type: CREATE_TODO,
        payload,
    }
}

export const removeTodo = (payload) => {

    return {
        type: REMOVE_TODO,
        payload,
    }
}

export const fetchTodos = () => dispatch => {
    return APIUtil.fetchTodos().then(todos => dispatch(receiveAllTodos(todos)))
}

// export const fetchTodo = (id) => dispatch => {
//     return APIUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
// }

export const createTodo = (todo) => dispatch => {

    return APIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)))
}

export const deleteTodo = (todo) => dispatch => {

    return APIUtil.deleteTodo(todo).then(todoId => dispatch(removeTodo(todoId)))
}