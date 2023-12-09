//import our dependencies (ESM syntax)
// the require function is used to either
// import dependencies or import local files
import express from "express";
import number from "./number.js";

// Create an express application object
const app = express();

// middleware
app.use(express.static("public")); // create a static file server



// Create a route handler for the root path
app.get("/", (req, res) => {
  const details = {
    url: req.url,
    method: req.method,
    headers: req.headers,
  };

  res.send(details);
});

app.get("/number", (req, res) => {
    res.send(`<h1>${number}</h1>`);
});

app.get("/example1", (req,res) => {
    const filename = __dirname + "/example.html"
    console.log(filename)
    res.sendFile(filename);
})

app.get("/number/:number", (req, res) => {
    const number = req.params.number
    const query = req.query
    res.render("number.ejs", {number: number, query: query});
})


// turn on the server listener
app.listen(4444, () => {
    console.log("Server is listening on port 4444");
})