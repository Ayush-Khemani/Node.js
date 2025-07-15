// Instead of a array, we have a json file:

const express = require('express');
const fs = require('fs');

const app = express();

// Get all todos
app.get('/get-tods', function (req, res) {
    

    try {
        let data = fs.readFileSync('todos.json', 'utf-8');
        res.json(data);

    }catch (err) {
        res.send("Error reading the file");
    }


});

// Add a new todo
app.post('/add-todo', function(req, res) {
    let content = {id : 1, title : "Buy Milk", completed: false};

    try {
        fs.writeFileSync('todos.json', JSON.stringify(content), 'utf-8');
         res.send("Added item to the list");

    }catch (err)
    {   
        res.send('unable to add todo');
    }


    


})

// Update a todo
app.put('/update-todo', function(req, res) {
    // FInd the todo to be updated
    let data = fs.readFileSync('todos.json', 'utf-8');
    let todos = JSON.parse(data);

    let todo = todos.find(t => t.id == 1);

    if (todo) {
        todo.title = "updated title";
    }
    else {
        res.send("todo not found");
    }

    let updatedTodos = JSON.stringify(todos);

    fs.writeFileSync('todos.json', updatedTodos, 'utf-8');
})

// Delete a todo
app.delete('/delete-todo', function(req, res) {
    
    try {
        let todos = fs.readFileSync('todos.json', 'utf-8');

        todos = JSON.parse(todos);

        let Updatedtodo = JSON.stringify(todos.filter((td) => td.id !== 1));
        try {
            fs.writeFileSync('todos.json', Updatedtodo, 'utf-8');
            res.send('todo deleted');
        }
        catch(err) {
            res.send('unable to delete todo');
        }
    

    }catch(err) {
        res.send('unable to read the file');
    }


}) 

app.listen(3000);