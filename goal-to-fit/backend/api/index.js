const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

require("dotenv").config();
const config = require("../config");
const PORT = config.port;

const exercisesRouter = require("../routes/exercises");
const usersRouter = require("../routes/users");

const app = express();

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

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
