@todos.each do |todo|
    json.set! todo.id do 
        json.extract! todo, :todo, :body
    end
end