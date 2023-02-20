const express = require("express")
const multer = require("multer")
const multipart = multer()

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
app.use(express.json()) // application/json

app.post("/submitform1", multipart.array("files"), async (req, res) => {
    console.log("body", req.body)
    console.log("files", req.files)
    console.log(req.headers["content-type"])

    console.log(JSON.parse(req.files[1].buffer.toString()))
    res.redirect("/")
})

app.listen(4444, () => console.log("Listening on port 4444"))