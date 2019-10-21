import {
    RECEIVE_TODO,
    REMOVE_TODO
} from '../actions/todo_actions';

const todoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODO:
            return Object.assign({}, state, action.todo);
        case REMOVE_TODO:
            let newState = Object.assign({}, state)
            delete newState[action.todoId]
            return newState
        default:
            return state;
    }
}

export default todoReducer;