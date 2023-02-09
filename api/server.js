const express = require("express");
const server = express();

server.use(express.json());

const recipesRouter = require("./recipes/recipes-router");

server.use("/api/recipes", recipesRouter);

server.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = server;
