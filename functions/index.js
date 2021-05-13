const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "./front-end/build")));
console.log(__dirname);
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./front-end/build", "index.html"));
});

exports.API = functions.https.onRequest(app);
