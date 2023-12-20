// import mongoose
const mongoose = require("mongoose")
// bring in my .env vars
const dotenv = require("dotenv")
// read .env file and load variables into process.env
dotenv.config()

// Save DATABASE_URL into its own variable
const DATABASE_URL = process.env.DATABASE_URL

// establish a mongo connection
mongoose.connect(DATABASE_URL)

// connection events
mongoose.connection
.on("open", () => {console.log("connected to mongo")})
.on("close", () => {console.log("disconnected from mongo")})
.on("error", (error) => {console.log(error)})

module.exports = mongoose