const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req, res) => {
  setTimeout(() => {
    res.send("Hello, world");
  }, 10000);
});

app.listen(8080, () => console.log("started on 8080"));
