const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
