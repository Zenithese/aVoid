

export const fetchTodos = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/todos`,
    })
}

export const fetchtodo = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/todos/${id}`
    })
};

export const createTodo = (todo) => {
    return $.ajax({
        method: 'POST',
        url: `/api/todos`,
        data: { todo }
    })
};

export const deleteTodo = (todoId) => {

    return $.ajax({
        method: 'DELETE',
        url: `/api/todos/${todoId}`
    })
};