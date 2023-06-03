// import my libraries
const dotenv = require("dotenv")
dotenv.config() // bring in variables from .env file
const express = require("express")

console.log(process.env.CREDENTIAL)

// Create our Express Application
const app = express()

// register middleware
app.use(express.static("public"))

// route for requests to "/"
app.get("/", (request, response) => {
    response.send("Hello World")
})

app.get("/json", (request, response) => {
    response.json({message: "hello"})
})

app.get("/cheese", (request, response) => {
    response.send("<h1>Queso</h1>")
})

app.get("/whatever", (request, response) => {
    response.sendFile("/home/alexmerced/development/educational/teaching/videos/videos/expressjs0623/whatever.html")
})
// turn on server (listen)
app.listen(3000, () => {
    console.log("The Server is Listening on Port 3000")
})