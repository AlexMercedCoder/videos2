require("dotenv").config()
const express = require("express")
const middleware = require("./utils/middleware")
const registerControllers = require("./utils/registerControllers")

// Create an application object
const app = express()

// register middleware
middleware(app)

// register routes/controllers
registerControllers(app)

// listener
app.listen(process.env.PORT, () => {
    console.log("The Server is listening on port: ", process.env.PORT)
})

