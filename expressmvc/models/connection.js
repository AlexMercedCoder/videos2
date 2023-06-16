const dotenv = require("dotenv")
const mongoose = require("mongoose")

// import .env variables, leads them into process.env
dotenv.config()

// Save the DATABASE_URL variable into it's own variables
const DATABASE_URL = process.env.DATABASE_URL

// Connect our database
mongoose.connect(DATABASE_URL, {})

// Connection messages
mongoose.connection
.on("open", () => {console.log("Mongo is Connected")})
.on("close", () => {console.log("Mongo is Disconnected")})
.on("error", (error) => {console.log(error)})

// export already connected mongoose file
module.exports = mongoose
