const mongoose = require("./connection")

// destruct Schema and Model from the mongoose object
const {Schema, model} = mongoose

// create a schema, defines that shape of an object
const cartoonSchema = new Schema({
    name: String,
    yearCreated: Number
})

// create a model using the schema
const Cartoon = model("Cartoon", cartoonSchema)

// export the model
module.exports = Cartoon