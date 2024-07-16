const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));
app.use(express.json());

const indexRouter = require("./router/index");
const todoRouter = require("./router/todo");

app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
