const express = require('express');

const app = express();

// middleware
app.use(express.json()); // hx-include & hx-vals
app.use(express.urlencoded({ extended: true })); // hx-post on forms
app.use(express.static('public')); // static files

// routes
app.post("/showbody", (req, res) => {
    res.send(`
    <h1>Body</h1>
    <code>${JSON.stringify(req.body)}</code>
    <h1>Headers</h1>
    <code>${JSON.stringify(req.headers)}</code>
    `)
})

app.get("/examples/1", (req, res) => {
    setTimeout(() => {
        res.send(`<div id="cheese">
        <h1 id=bread>Requested Content</h1>
        <p>Here is some random text</p>
        </div>`)
    }, 2000)
})

app.get("/mydata", (req, res) => {
    // array of objects with name and age
    const arr = [
        { name: "John", age: 42 },
        { name: "Jane", age: 36 },
        { name: "Fred", age: 12 },
        { name: "Sally", age: 24 },
    ]
    res.send(arr)
})

app.listen(3000, () => console.log('http://localhost:3000'));