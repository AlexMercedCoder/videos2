const dotenv = require("dotenv");
const express = require("express");

// bring in my env variables into process.env
dotenv.config();

// create my express application
const app = express();

// register middeware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
// "/" -> public/index.html
// "/cheese.html" -> public/cheese.html
// "/cheese" -> public/cheese/index.html
// "/cheese/bread.html" -> public/cheese/bread.html

app.post("/", (req,res) => {
    console.log(req.body)
    res.redirect("/")
})

// turn on server
app.listen(3000, () => {
  console.log("listening on 3000");
});
