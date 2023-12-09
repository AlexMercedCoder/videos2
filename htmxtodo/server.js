import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// get my environment variables (destructuring)
const { PORT, DATABASE_URL } = process.env;

// pull out some of the tools from mongoose
const { Schema, model } = mongoose;

// setup my mongo connection
mongoose.connect(DATABASE_URL);

// Setup Connection Messages
mongoose.connection
  .on("connected", () => console.log("Connected to Mongo"))
  .on("disconnected", () => console.log("Disconnected from Mongo"))
  .on("error", (error) => console.log("Error connecting to Mongo", error));

// CREATE OUR TODO MODEL
const todoSchema = new Schema({
  title: String,
  complete: Boolean,
});

// Create Our Model
const Todo = model("Todo", todoSchema);

// create express application
const app = express();

// register middleware
app.use(morgan("dev"));
app.use(express.static("public")); // create a static server
app.use(express.json()); // {"key": "value"}
app.use(express.urlencoded({ extended: true })); // key=value&key=va

// main page route
app.get("/", async (req, res) => {
  // get all the todos from the database
  const todos = await Todo.find({});
  res.render("main.ejs", { todos });
});

// INDEX ROUTE - "/todo" - show all todos
app.get("/todo", async (req, res) => {
  // get all the todos from the database
  const todos = await Todo.find({});
  // render the index.ejs template with the todos
  res.render("index.ejs", { todos });
});

// NEW ROUTE - "/todo/new" - return the form to create a todo
app.get("/todo/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE ROUTE - "/todo" - create a new todo
app.post("/todo", async (req, res) => {
  try {
    req.body.complete = false;
    const newTodo = await Todo.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// Update Route - marks todo as completed
app.put("/todo/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
      complete: true,
    });
    // get all the todos from the database
    const todos = await Todo.find({});
    res.render("index.ejs", { todos });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// delete route - deletes a todo
app.delete("/todo/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    // get all the todos from the database
    const todos = await Todo.find({});
    res.render("index.ejs", { todos });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// turn on the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
