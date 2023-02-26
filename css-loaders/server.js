const express = require("express")

const app = express()

app.use(express.static("website"))

app.get("/api", (req, res) => {
    setTimeout(() => {
        res.json({status: "complete"})
    }, 3000)
})

app.get("/apy", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.post("/apy", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(4444, () => {console.log("listening on 4444")})