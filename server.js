const express = require('express');
        app = express();
        bodyParser = require('body-parser')
        mongoose = require('mongoose');
        Schema = mongoose.Schema;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todo/db');

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log("Connected to db at /todo/db/")
})

const todoSchema = new Schema({
    text: String,
    done: Boolean
})

const Todo = mongoose.model("Todo", todoSchema)


//RETURN TODOS
app.get("/todos", (req, res) => {
    Todo.find({})
    .then(todos => {
        console.log(todos)
        res.json(todos)
    })
})

app.get("/todos/:todoId", (req, res) => {
    Todo.findById(req.params.todoId)
    .then(todos => {
        res.json(todos)
    })
})

//CREATE TODO
app.post("/todos", (req, res) => {

    let newTodo = new Todo({
        text: req.body.text,
        done: req.body.done
    })
    
    newTodo.save()
    .then(Todo => {
        console.log("New todo")
        res.json(newTodo)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
    
})

//DELETE TODO
app.delete("/todos/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
    .then((removedTodo) => {
        console.log(removedTodo)
        res.json({status: 'removed'})
    })
    .catch((err) => {
        res.json(err)
    })
})

app.listen(8000)