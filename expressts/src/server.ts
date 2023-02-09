import { Application, Request, Response, RequestHandler } from "express";

const express = require("express");

// create application object
const app: Application = express();

// routes
app.get("/", (req: Request, res: Response) => {
  res.json({ Message: "Hello World" });
});

app.get("/cheese", (req: Request, res: Response) => {
    res.send("cheese")
})

app.listen(4000, () => {
  console.log("listening on port 4000");
});
