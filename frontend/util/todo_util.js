
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