"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// create application object
const app = express();
// routes
app.get("/", (req, res) => {
    res.json({ Message: "Hello World" });
});
app.get("/cheese", (req, res) => {
    res.send("cheese");
});
app.listen(4000, () => {
    console.log("listening on port 4000");
});
