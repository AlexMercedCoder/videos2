// import express
const express = require("express")

// create our application
const app = express()

// set view engine
app.set("view engine", "ejs")

app.locals.cheese = "gouda"

// setup static file serving
app.use(express.static("public"))

// routing
app.get("/", (req, res) => {
    res.render("first", {test: "Hello World", h1class: "light", arr: [1,2,3,4,5], title: "this page"})
})


// listener
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})