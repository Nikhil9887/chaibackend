// console.log("Chai aur Code");

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Nikhil Malusare Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at Chai aur Code");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
