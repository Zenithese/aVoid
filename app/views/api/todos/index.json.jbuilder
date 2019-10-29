@todos.each do |todo|
    json.set! todo.id do 
        json.extract! todo, :todo, :todo_id
    end
end