import * as APIUtil from '../util/todo_util';

export const RECEIVE_TODO = "RECEIVE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

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

export const createTodo = (todo) => dispatch => {

    return APIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)))
}

export const deleteTodo = (todo) => dispatch => {

    return APIUtil.deleteTodo(todo).then(todoId => dispatch(removeTodo(todoId)))
}