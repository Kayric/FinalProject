const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// require("dotenv").config();
const config = require("../config");
const PORT = config.port;

const exercisesRouter = require("../routes/exercises");
const usersRouter = require("../routes/users");

const app = express();
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

module.exports = app;
