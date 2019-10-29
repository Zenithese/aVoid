class RemoveTodoIdfromTodos < ActiveRecord::Migration[5.2]
  def change
    remove_column :todos, :todo_id, :integer
  end
end
