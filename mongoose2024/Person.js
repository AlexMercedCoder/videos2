// model: Person
// collection/table: people
const mongoose = require("./connection");

// Pull out mongoose.Schema and mongoose.model into their own variables
const { Schema, model } = mongoose;

// create the schema
// the rules or design of our data
const personSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true }
);

// create a model
// object that allows us to create, query, delete, and update data
const Person = model("Person", personSchema)

module.exports = Person
