class Api::TodosController < ApplicationController
    def index
        @todos = Todo.all
        render("api/todo/index.json.jbuilder")
    end

    def show
        @todo = Todo.find(params[:id])
        # render("api/todo/show.json.jbuilder")
    end

    def create
        @todo = Todo.new(todo_params)
        @todo.save
        render("api/todo/show.json.jbuilder")
    end

    def destroy
        @todo = todos.find_by(todo_id: params[:id])
        @todo.destroy
        render("api/todo/show.json.jbuilder")
    end

    private

    def todo_params
        params.require(:todo).permit(:body, :todo)
    end
end
