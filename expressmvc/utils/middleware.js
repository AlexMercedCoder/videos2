const morgan = require("morgan")
const methodOverride = require("method-override")
const express = require("express")


function middleware(app){
    app.use(morgan("dev")) // logging
    app.use(methodOverride("_method")) // method overriding
    app.use(express.static("public")) // public folder as static server
    app.use(express.urlencoded({extended: false})) // parse urlencoded
}

module.exports = middleware