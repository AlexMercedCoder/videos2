require("dotenv").config()
const express = require("express")
const Todo = require("./models/todo")

// Create Express App
const app = express()

// register our middle
// logging middleware...
app.use(express.json())

// route to show all todos
app.get("/alltodos", async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos)
})

// route to create a todo
app.get("/maketodo/:title/:description", async (req,res) => {
    const {title, description} = req.params
    const todo = await Todo.create({title, description})
    res.json(todo)
})


// turn on the server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})